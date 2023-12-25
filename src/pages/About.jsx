import React from 'react';
import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import BannerAbout from '../images/imgBanner_about.webp'

function About () {

    useEffect (() => {
        document.title = 'Kasa - A Propos'
    }, [])
    
    return <div>
        <Banner homeImg={BannerAbout}/>
        </div>;
}

export default About;