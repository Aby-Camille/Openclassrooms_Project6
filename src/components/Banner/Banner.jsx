import React from 'react';
import './Banner.scss';

function Banner ({title, homeImg}){
    return <div className='banner'>
        <p className='bannerTitle'>{title}</p>
        <img src={homeImg} alt ="banner"/>
    </div>
}
export default Banner;