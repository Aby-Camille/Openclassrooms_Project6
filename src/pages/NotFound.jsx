import React from 'react';
import { useEffect } from 'react';

function NotFound () {

    useEffect (() => {
        document.title = 'Kasa - 404'
    }, [])
    
    return <div>404</div>;
}

export default NotFound;