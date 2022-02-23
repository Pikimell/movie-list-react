import React from 'react';
import {baseUrlImage} from "../../../../global_const";
import {Link} from "react-router-dom";

const FilmItem = ({title, picture, date, filmId}) => {
    return (
        <Link to={`/film/${filmId}`} className={'filmItemBody'}>
            <div>
                <img
                    src={`${baseUrlImage}${picture}`}
                    alt={title}
                />
            </div>
            <div>
                <b>{title}</b>
                <p>{date}</p>
            </div>
        </Link>
    );
};

export default FilmItem;