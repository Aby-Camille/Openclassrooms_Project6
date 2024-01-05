import React from 'react';
import { useEffect } from 'react';
import Collapse from './../components/Collapse/Collapse';
import Carousel from './../components/Carousel/Carousel';
import Rating from './../components/Rating/Rating';
import logements from './../data/logements.json';
import './Housing.scss';

function Housing () {

    useEffect (() => {
        document.title = 'Kasa - Logement'
    }, [])
    
    return <div className='logement-collapse'>
        <Carousel/>
        <Rating/>
        <Collapse title={'Description'} />
        <Collapse title={'Équipements'} />
    </div>;
}

export default Housing;