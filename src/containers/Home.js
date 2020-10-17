import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {  useHistory  } from 'react-router-dom';

function Home() {
    const [wikiArtData, setWikiArtData] = useState(null);
    // const [anotherDataSource, setAnotherDataSource] = useState([]);

    useEffect(() => {
        axios
        .get("https://www.wikiart.org/en/app/api/popularartists?&authSessionKey=dc991ee37f18")
            
        .then(function (response) {
            console.log('response', response)
                // const artdataresponse = 
                // setWikiArtData(artdataresponse);
        })
        .catch(function (error) {
            console.warn(error);
        })
    }, []);



    // useEffect(() => {   
    //     const searchParams = history.location.search;
    //     const urlParams = new URLSearchParams(searchParams);
    //     const city = urlParams.get("city");
    //     if (city) {
    //         setCity(city);
    //     }
    // }, [history]);



    return (
        <div>
            <h1>Home: Midterm</h1>
            {/* {wikiArtData.map((artistName, i) => (
                <div key={i}>
                    <h2>{artistName.name}</h2>
                    <p>Artist Name: {artistName.count}</p>
                </div>
            ))} */}
        </div>
    );
}

export default Home;