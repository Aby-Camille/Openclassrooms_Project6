import React from 'react';
import Banner from '../components/Banner/Banner';
import BannerHomeimg from '../images/imgBanner_home.webp'
import { useEffect } from 'react';

function Home (){

    useEffect (() => {
        document.title = 'Kasa'
    }, [])
    
    return <div>
        <Banner title='Chez vous, partout et ailleurs' homeImg={BannerHomeimg}/>
    </div>;
}
export default Home;