import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";

function Card ({title, location, cover}) {

    return <Link to={`/housing/${location}`} className="card">
        <h3 className="card_title">{title}</h3>
        <img className="card_img" src= {cover} alt={title}/>   
    </Link>
}
export default Card;