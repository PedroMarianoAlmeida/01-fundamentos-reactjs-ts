import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />



            <div className={styles.profile}>
                <Avatar
                    src="https://github.com/moises1223.png"
                    hasBorder
                />
                <strong className={styles.username}>Moisés Souza</strong>
                <span className={styles.role}>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );

}