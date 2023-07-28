import {basePosterURL} from "../../../constants";
import css from './MovieDetails.module.css';
import {NavLink} from "react-router-dom";
import {StarsRating} from "../../StarsRating/StarsRating";

const MovieDetails = ({movie}) => {
    const {
        id,
        poster_path,
        release_date,
        title,
        genres,
        adult,
        budget,
        homepage,
        original_language,
        original_title,
        overview,
        popularity,
        production_companies,
        production_countries,
        spoken_languages,
        status,
        tagline,
        vote_average
    } = movie;

    return (
        <div className={css.MovieDetails}>
            <div className={css.MainInfo}>
                <div className={css.Img}>
                    <div><img src={basePosterURL + poster_path} alt={title}/></div>
                </div>
                <div className={css.Info}>
                    <div className={css.TitleAdult}>
                        <div className={css.Title}><h1>{title}</h1></div>
                        <div className={css.isAdult}>{adult ? <div className={css.adult}></div> :
                            <div className={css.notAdult}></div>}</div>
                    </div>
                    <StarsRating vote_average={vote_average}/>
                    <div className={css.Genres}>
                        Genres:
                        <div className={css.GenresList}>{genres?.map(genre => (
                            <div key={genre.id} className={css.GenresListItem}>{genre.name}</div>))}</div>
                    </div>
                    <div>id: {id}</div>
                    <div>Release date: {release_date}</div>
                    <div>Budget: {budget}$</div>
                    <div>Home page: <NavLink to={homepage}>{homepage}</NavLink></div>
                    <div>Original language: {original_language}</div>
                    <div>Original title: {original_title}</div>
                    <p><b>Overview:</b> {overview}</p>
                    <div>Tagline: {tagline}</div>
                    <div>Popularity: {popularity}</div>
                    <div className={css.Genres}>
                        Production companies:
                        <div className={css.GenresList}>{production_companies?.map(genre => (
                            <div key={genre.id} className={css.GenresListItem}>{genre.name}</div>))}</div>
                    </div>
                    <div className={css.Genres}>
                        Production countries:
                        <div className={css.GenresList}>{production_countries?.map(genre => (
                            <div key={genre.iso_3166_1} className={css.GenresListItem}>{genre.name}</div>))}</div>
                    </div>
                    <div className={css.Genres}>
                        Spoken languages:
                        <div className={css.GenresList}>{spoken_languages?.map(genre => (
                            <div key={genre.iso_639_1} className={css.GenresListItem}>{genre.name}</div>))}</div>
                    </div>
                    <div>Status: {status}</div>
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};