import React from "react";
import './Rating.scss';
import starActive from '../../images/star-active.svg';
import starInactive from '../../images/star-inactive.svg';


function Rating ({ rating }) {
    const stars = 5 - rating;

    return <div className="rating">
        {
            [...Array(parseInt(rating))].map(() => <img src={starActive} alt="star"/>)
        }

        {
            [...Array(stars)].map(() => <img src={starInactive} alt="star"/>)
        }
    </div>
}

export default Rating;