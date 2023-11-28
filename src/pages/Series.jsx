import React from 'react';
import SeriesList  from '../components/SeriesList';

import marvelLogo from '../images/marvel-characters.jpg'


function Series() {

  

    return (
        <div className="series">
            <img src={marvelLogo} className='imgSer' />
            <SeriesList />

        </div>
    )

}

export default Series