import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKey, baseUrl, baseUrlImage, langQuery} from "../../global_const";
import './FilmDetails.module.css'
import ListComments from "./Comments/ListComments";

const FilmDetails = () => {
    const params = useParams()
    const [filmItem, setFilmItem] = useState({})
    const [urlVideo, setUrlVideo] = useState(undefined)
    const [comments, setComments] = useState([])

    const getFilm = async () => {
        axios.get(`${baseUrl}/${params.id}`, {
            params: {
                api_key: APIKey, language: langQuery
            }
        }).then(res => {
            setFilmItem(res.data)
        })


        axios.get(`${baseUrl}/${params.id}/videos`, {
            params: {
                api_key: APIKey, language: langQuery
            }
        }).then(res => {
            if (res.data.results.length > 0)
                setUrlVideo(`https://www.youtube.com/embed/${res.data.results[0].key}`)
            else setUrlVideo(` `)
        })


        axios.get(`${baseUrl}/${params.id}/reviews`, {
            params: {
                api_key: APIKey, language: langQuery
            }
        }).then(res => {
            if (res.data.results.length > 0)
                setComments(res.data.results)
        })
    }

    useEffect(async () => {
        if (!urlVideo) await getFilm()
    })

    return (

        (filmItem.title) ? <div className={'bodyPage'}>
            <div className={'filmDetails'}>
                <img
                    src={`${baseUrlImage}${filmItem.poster_path}`}
                    alt={filmItem.title}
                />
                <div className={'filmDescription'}>
                    <h1>{filmItem.title}</h1>
                    <p><b>Overview:</b> {filmItem.overview}</p>

                    <ul>
                        <li>Company: {filmItem.production_companies.map(item => {
                            return `${item.name}, `
                        })}</li>
                        <li>Premiere: {filmItem.release_date}</li>
                        <li>Rating: {filmItem.vote_average}</li>
                    </ul>
                </div>
            </div>

            {(urlVideo && urlVideo.length > 1) ?
                <iframe className={'videoPlayer'}
                        src={urlVideo}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/> : <div></div>}

            <ListComments comments={comments}/>

        </div> : <div className={'bodyPage'}>
            <h1>LOADED</h1>
        </div>);
};

export default FilmDetails;