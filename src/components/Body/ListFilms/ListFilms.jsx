import React from 'react';
import FilmItem from "./FilmItem/FilmItem";

const ListFilms = ({films}) => {
    return (
        <div className={'listFilmsBody'}>
            {
                films.map(film => {
                    return <FilmItem
                        title={film.title}
                        picture={film.poster_path}
                        date={film.release_date}
                        rating={film.vote_average}
                        overview={film.overview}
                        filmId={film.id}
                        key={film.id}
                    />
                })
            }
        </div>
    );
};

export default ListFilms;