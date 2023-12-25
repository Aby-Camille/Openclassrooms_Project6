import React from "react";
import './Card.scss';

function Card ({title, location}) {
    return <div class="card">
        {title}
        {location}
    </div>
}
export default Card;