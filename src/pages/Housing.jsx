import React from 'react';
import { useEffect } from 'react';

function Housing () {

    useEffect (() => {
        document.title = 'Kasa - A Propos'
    }, [])
    
    return <div>Housing</div>;
}

export default Housing;