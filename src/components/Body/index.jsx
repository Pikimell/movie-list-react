import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {loadFilmsFromDB, setTotalPage, setTotalResult} from "../../store/FilmReducer";
import {APIKey, baseUrl, langQuery} from "../../global_const";
import ListFilms from "./ListFilms/ListFilms";
import NavigationBlock from "./NavigationBlock/NavigationBlock";

const Body = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.filmReducer.films)
    const selectPage = useSelector(state => state.filmReducer.selectPage)

    const loadData = async() => {
        axios.get(`${baseUrl}/popular`,{
            params: {
                api_key: APIKey,
                page: selectPage,
                language: langQuery
            }
        }).then(res=>{
            let films = res.data.results
            let totalPages = res.data.total_pages
            let totalResults = res.data.total_results

            dispatch(setTotalPage(totalPages))
            dispatch(setTotalResult(totalResults))
            dispatch(loadFilmsFromDB(films))
        })
    }

    useEffect(()=> {
        loadData().then()
    })

    return (
        <div className={'bodyPage'}>
            <ListFilms films={films}/>
            <NavigationBlock selectPage={selectPage} loadData={loadData}/>
        </div>
    );
};

export default Body;