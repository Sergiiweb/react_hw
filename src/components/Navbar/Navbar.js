import styles from './Navbar.module.css';
import {urls} from "../../constants/urls";
import {AppRoutes} from "../../routing/AppRoutes";
import {Link} from "react-router-dom";

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
            {topMenu.map((button, idx) =>
                <Link key={idx} to={button.route}>
                    {button.label}
                </Link>)}
        </div>
    );
};

export {Navbar};