import React from 'react';
import { useEffect } from 'react';

import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';

import BannerHomeimg from '../images/imgBanner_home.webp'

import './Home.scss';

function Home (){

    useEffect (() => {
        document.title = 'Kasa - Accueil'
    }, [])
    
    return <div>
        <Banner title='Chez vous, partout et ailleurs' homeImg={BannerHomeimg}/>
        <div class="grid">
            <Card title="alex"/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>;
}
export default Home;