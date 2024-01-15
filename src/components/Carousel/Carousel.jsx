import React from "react";
import './Carousel.scss';
import { useState } from "react";
import nextBtn from '../../images/right-btn.svg';
import prevBtn from'../../images/left-btn.svg';

function Carousel ({ slides, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
	const [fading, setFading] = useState(false);

	function goToPrevious() {
		setFading(true);
		setTimeout(() => {
			if (currentIndex === 0) {
				setCurrentIndex(slides.length - 1);
			} else {
				setCurrentIndex(currentIndex - 1);
			}
			setFading(false);
		}, 200);
	}

    function goToNext() {
		setFading(true);
		setTimeout(() => {
			if (currentIndex === slides.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
			setFading(false); 
		}, 200); 
	}

    return <div className="carousel">
        {
            slides.length === 0 && <h2 className="no-photo-msg">Pas de photo disponible ...</h2>
        }

        {
            slides.length > 0 && <img src={slides[currentIndex]} className={`slides ${fading ? 'fading-out' : ''}`} alt={title} />
        }

        {
            slides.length > 1 &&
            <div>
                <img className='nav-btn prev-btn' src={prevBtn} alt='précédente' onClick={goToPrevious} />
                <img className='nav-btn next-btn' src={nextBtn} alt='suivante' onClick={goToNext} />
                <div className='slide-number'>
                    {currentIndex + 1} / {slides.length}
                </div>
            </div>
        }
    </div>
}

export default Carousel;