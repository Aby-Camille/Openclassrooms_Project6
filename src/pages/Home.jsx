import React from 'react';
import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import BannerHomeimg from '../images/imgBanner_home.webp';
import logements from '../data/logements.json';
import './Home.scss';

function Home () {

    useEffect (() => {
        document.title = 'Kasa - Accueil'
    }, [])
    
    return <div>
        <Banner title='Chez vous, partout et ailleurs' homeImg={BannerHomeimg}/>
        <div className="grid">
            {
                logements.map((logement) => {
                    return <Card key={logement.id} logement={logement}
                    title={logement.title} cover={logement.cover}
                    />;
                })
            }
        </div>
    </div>;
}
export default Home;