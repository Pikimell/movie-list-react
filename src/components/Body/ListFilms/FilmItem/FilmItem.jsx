import React from 'react';
import {baseUrlImage} from "../../../../global_const";

const FilmItem = ({title,picture,date,rating,overview}) => {
    return (
        <div className={'filmItemBody'}>
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
        </div>
    );
};

export default FilmItem;