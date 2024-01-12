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
				slides.length === 0 ? ( 
					<h2 className="carousel_no-photo-msg">Pas de photo disponible ..</h2>
				) : slides.length === 1 ? ( 
					<img src={slides[currentIndex]} className='carousel_slides' alt={title} />
				) : (
					<div>
						<img className='carousel_nav-btn prev-btn' src={prevBtn} alt='précédente' onClick={goToPrevious} />

						<img src={slides[currentIndex]} className={`carousel_slides ${fading ? 'fading-out' : ''}`} alt={title} />

						<img className='carousel_nav-btn next-btn' src={nextBtn} alt='suivante' onClick={goToNext} />

						<div className="carousel_slide-number">
							{currentIndex + 1} / {slides.length}
						</div>
					</div>
				)
			}
    </div>

}

export default Carousel;