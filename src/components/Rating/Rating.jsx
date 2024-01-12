import React from "react";
import './Rating.scss';
import starActive from '../../images/star-active.svg';
import starInactive from '../../images/star-inactive.svg';


function Rating ({ rating }) {

    return <div className="rating">
       {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? starActive : starInactive}
          alt="star"
        />
      ))}
    </div>
}

export default Rating;