import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { useState, FormEvent, ChangeEvent } from "react";

interface PostProps {
  author: { avatarUrl: string; name: string; role: string };
  publishedAt: Date;
  content: { type: string; content: string }[];
}
export function Post({ author, publishedAt, content }: PostProps) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  const [newCommentText, setNewCommentText] = useState("");
  const [customValidity, setCustomValidity] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    setCustomValidity("Este campo é obrigatório!");
  }

  function deleteComment(commentToDelete: ChangeEvent<HTMLInputElement>) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete.target.value;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} hasBorder />
            <div className={styles.authorInfo}>
              <strong className={styles.username}>{author.name} </strong>
              <span className={styles.role}>{author.role}</span>
            </div>
          </div>
        </div>

        <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong className={styles.title}>Deixe seu feedback</strong>

        <textarea
          name="comment"
          className={styles.comment}
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        {customValidity}

        <div className={styles.divBtn}>
          <button
            disabled={isNewCommentEmpty}
            className={styles.commentButton}
            type="submit"
          >
            Publicar
          </button>
        </div>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
