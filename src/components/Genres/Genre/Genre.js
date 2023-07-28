import css from './Genre.module.css';
const Genre = ({genre}) => {
    const {name} = genre;

    return (
        <div className={css.genreWrap}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};