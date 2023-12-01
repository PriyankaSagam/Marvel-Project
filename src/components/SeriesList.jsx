import React from 'react';
import { useState, useEffect } from 'react';

const SeriesList = () => {
    const [series, setSeries] = useState([]);
    useEffect(() => {
        const fetchSeries = async () => {
            try {
              
                const baseUrl = 'https://gateway.marvel.com:443/v1/public/series?';
                const apiKey = '&ts=1700766432&apikey=57c9d9796141a988e96a3390b3b84cb5&hash=184918aed4079cf16b265d2d62fc46a9';
                const apiUrl = baseUrl + apiKey

                console.log(apiUrl)
                const response = await fetch(apiUrl);
                const data = await response.json();

                setSeries(data.data.results);
            } catch (error) {
                console.error('Error fetching series: ', error)
            }
        }
        fetchSeries();
    }, []);
    const loaded = () => {
        return (
            <div>
                <h1 className="text2">Marvel Series</h1>
                <ul className="ul">
                    {series.map((serie) => (
                        <li className="containerser" key={serie.id}>
                            <div id='ser1'> 
                                 <h3 className="setit">{serie.title}</h3>
                                 <h4 className="year">Year : {serie.startYear}</h4>
                                <h4 className="stories">Stories : {serie.stories.available}</h4>
                             
                                <h4 id="stories"><strong>Story Names :</strong></h4>
                                
                                <h4>{serie.stories.items.map((item) => (
                                    <ul className="storyname" >
                                         <li>   {item.name} </li>
                                    </ul>
                                ))}
                                </h4>
                                 <h4 id="comics"><strong>Comics :</strong> {serie.comics.available}</h4>
                             </div>
                             <div id='ser2'>
                                   <img
                                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                                    alt={serie.title} className="imgser1" />
                             </div>
                        </li>
                            
                    ))}
                </ul>
            </div>
        );
    }

    const loading = () => {
        return (<h4>Nothing to display</h4>)
    }
    return series ? loaded() : loading();
};

export default SeriesList;
