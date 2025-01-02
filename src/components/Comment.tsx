import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import React, { useState } from 'react';


export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>

            <Avatar
                src="https://github.com/HenriqueDeAssuncao.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.headerComment}>
                        <div className={styles.authorAndTime}>
                            <strong>Henrique doidão </strong>
                            <time className={styles.time} title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} className={styles.deleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p className={styles.userComment}>{content} </p>

                </div>

                <footer className={styles.footer}>
                    <button
                        className={styles.likebtn}
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}