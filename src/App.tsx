import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jardimdanificado.png',
      name: 'jardim danificado',
      role: 'Fullstack Dev'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá, tudo bem? ',
      },
      {
        type: 'paragraph',
        content: 'Apenas testando 😍 ',
      },
      {
        type: 'link',
        content: 'https://abystract.com.br'
      },

    ],
    publishedAt: new Date('2024-11-28 14:37:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/HenriqueDeAssuncao.png',
      name: 'Henrique De Assunção',
      role: 'Computer Science Student'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Apenas outro teste, sou outra pessoa comentando ! ',
      },
    ],
    publishedAt: new Date('2024-11-26 14:37:00')
  },
];

export function App() {
  return (
    <div>

      <Header></Header>
      
      
      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

