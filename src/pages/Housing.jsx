import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Collapse from './../components/Collapse/Collapse';
import Carousel from './../components/Carousel/Carousel';
import Rating from './../components/Rating/Rating';
import logements from './../data/logements.json';
import './Housing.scss';

function Housing () {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    useEffect (() => {
        document.title = 'Kasa - Logement';
    }, [])
    
    return <div>
        <Carousel/>
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <Rating rating={logement.rating}/>
        <div className='logement_collapse'>
            <Collapse title={'Description'} content={logement.description}/>
            <Collapse title={'Équipements'} content={logement.equipments}/>
        </div>
    </div>;
}

export default Housing;