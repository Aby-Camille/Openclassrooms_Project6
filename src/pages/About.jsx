import React from 'react';
import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import BannerAbout from '../images/imgBanner_about.webp';
import Collapse from './../components/Collapse/Collapse';
import about from '../data/about.json';
import './About.scss';

function About () {

    useEffect (() => {
        document.title = 'Kasa - A Propos'
    }, [])
    
    return <div>
        <Banner homeImg={BannerAbout}/>
        <div className='collapse_container'>
        {about.map(({ index, title, content }) =>
				(
					<div key={`${title}`}>
						<Collapse
							title={title}
							content={content}
						/>
					</div>
				)
				)}
        </div>
        </div>;
}

export default About;