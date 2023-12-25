import React from 'react';
import './Banner.scss';

function Banner ({title, homeImg}) {
    return <div class='banner'>
        <p class='bannerTitle'>{title}</p>
        <img src={homeImg} alt ="banner"/>
    </div>
}
export default Banner;