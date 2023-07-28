import css from './FilteredGenre.module.css';
const FilteredGenre = ({genre}) => {
    const {name} = genre;

    return (
        <div className={css.genreWrap}>
            <div>{name}</div>
        </div>
    );
};

export {FilteredGenre};