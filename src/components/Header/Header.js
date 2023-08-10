import css from './Header.module.css';
const Header = () => {

    return (
        <div className={css.Header}>
            CarsAPI<div className={css.small}>v1</div>
        </div>
    );
};

export {Header};