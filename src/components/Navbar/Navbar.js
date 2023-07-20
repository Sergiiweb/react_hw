import styles from './Navbar.module.css';
import {urls} from "../../constants/urls";
const Navbar = () => {
    const topMenu = [
        {
            label: 'Main',
            route: '/'
        },
        {
            label: 'Todos',
            route: urls.todos.base
        },
        {
            label: 'Albums',
            route: urls.albums.base
        },
        {
            label: 'Comments',
            route: urls.comments.base
        },
    ];

    return (
        <div className={styles.navbar}>
            {topMenu.map((button,idx)=> <button key={idx}>
                {button.label}
            </button>)}
        </div>
    );
};

export {Navbar};