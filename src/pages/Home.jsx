import React from 'react';
import { useEffect } from 'react';

function Home (){

    useEffect (() => {
        document.title = 'Kasa'
    }, [])
    
    return <div>Home</div>;
}
export default Home;