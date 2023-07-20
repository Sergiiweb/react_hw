import styles from './Navbar.module.css';
import {urls} from "../../constants/urls";
import {AppRoutes} from "../../routing/AppRoutes";
const Navbar = () => {
    const topMenu = [
        {
            label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            label: 'Todos',
            route: AppRoutes.TODOS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Comments',
            route: AppRoutes.COMMENTS
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