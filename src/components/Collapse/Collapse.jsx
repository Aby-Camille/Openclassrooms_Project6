import React from 'react';
import './Collapse.scss';
import { useState } from 'react';
import collapseArrow from './../../images/arrowUp.svg';

function Collapse ({title, content}) {

  const [active, setActive] = useState(false);

  const handleToggle = () => {
		setActive(!active);
	};

  return <div className={`collapse ${active && 'active'}`}>
            <div className='collapse_title'>
            {title}
              <img className='collapse_icon'
                onClick={handleToggle}
                src= {collapseArrow}
                alt='collapse arrow'
              />
              </div>
              <div className="collapse_content">{content}</div>
          </div>
}
export default Collapse;