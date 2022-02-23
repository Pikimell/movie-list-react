import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='headerBody'>
            <Link to={'/home'}><h2>NetFLEX</h2></Link>
            <h2> </h2>
        </div>
    );
};

export default Header;