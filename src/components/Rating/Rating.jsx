import React from "react";
import './Rating.scss';
import starActive from '../../images/star-active.svg';
import starInactive from '../../images/star-inactive.svg';


function Rating () {
    return <div className="rating">
        <img src={starActive} alt="star"/>
        <img src={starInactive} alt="star"/>
    </div>
}

export default Rating;