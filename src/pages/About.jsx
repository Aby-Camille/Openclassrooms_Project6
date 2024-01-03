import React from 'react';
import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import BannerAbout from '../images/imgBanner_about.webp';
import Collapse from './../components/Collapse/Collapse';

function About () {

    useEffect (() => {
        document.title = 'Kasa - A Propos'
    }, [])
    
    return <div>
        <Banner homeImg={BannerAbout}/>
        <Collapse>collapse</Collapse>
        </div>;
}

export default About;