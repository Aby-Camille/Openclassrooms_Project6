import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";

function Card ({logement}) {

    return <Link to={`/housing/${logement.id}`} className="card">
        <h3 className="card_title">{logement.title}</h3>
        <img className="card_img" src= {logement.cover} alt={logement.title}/>   
    </Link>
}
export default Card;