import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSelectPage} from "../../store/FilmReducer";


const Header = () => {
    const dispatch = useDispatch();
    const setDefaultPage = () => {
        dispatch(setSelectPage(1))
    }

    return (
        <div className='headerBody'>
            <Link to={'/home'}><h2 onClick={setDefaultPage}>NetFLEX</h2></Link>
            <h2> </h2>
        </div>
    );
};

export default Header;