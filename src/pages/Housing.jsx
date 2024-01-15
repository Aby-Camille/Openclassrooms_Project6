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

    const slides = logement.pictures
    const hostName = logement?.host?.name?.split(' ');
    
    return <div>
        <Carousel slides={slides} title={logement.title}/>
        <div className='details'>
            <div className='details_info1'>
            <h2 className='details_infos1_title'>{logement.title}</h2>
            <p className='details_infos1_location'>{logement.location}</p>
            <div className='details_infos1_tags'>{logement.tags.map((tag, index) => (<div className='tag-style' key={index}>{tag}</div>))}</div>
            </div>
        <div className="details_infos2">
            <div className='details_infos2_host'>
                <div className='details_infos2_host_name'>
                    <span>{hostName[0]}</span>
                    <span>{hostName[1]}</span>
                </div>
                <img src={logement.host.picture} alt={logement.host.name} className='details_infos2_host_picture' />
                </div>
                <Rating rating={logement.rating}/>
            </div>
        </div>
        <div className='logement_collapse'>
            <Collapse title={'Description'} content={logement.description}/>
            <Collapse title={`Équipements`} content={logement.equipments.map((equipement, index)=> <div key={index}>{equipement}</div>)}/>
        </div>
    </div>; 
}

export default Housing;