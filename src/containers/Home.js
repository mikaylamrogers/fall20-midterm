import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {  useHistory  } from 'react-router-dom';

function Home() {
    const [wikiArtData, setWikiArtData] = useState([]);
    const [artsyMuseumData, setArtsyMuseumData] = useState([]);

    // console.log('ENV VALUE', process.env.API_SESSION_KEY);

    // WikiArt //
    useEffect(() => {
        axios
        .get("https://cors-anywhere.herokuapp.com/https://www.wikiart.org/en/app/api/popularartists?&authSessionKey=dc991ee37f18")
            
        .then(function (response) {
                const popularartistsresponse = response.data;
                setWikiArtData(popularartistsresponse);
        })
        .catch(function (error) {
            console.warn(error);
        });
    }, []);
    console.log("wikiArtData", wikiArtData);

    // Artsy //
    useEffect(() => {
        axios
        .get("https://api.artsy.net/api/artists/4d8b92b34eb68a1b2c0003f4")
            
        .then(function (response) {
                const artlocationresponse = response.data;
                setWikiArtData(artlocationresponse);
        })
        .catch(function (error) {
            console.warn(error);
        });
    }, []);
    console.log("artsyMuseumData", artsyMuseumData);


    




    return (
        <div>
            <h1>Home: Midterm</h1>
            {wikiArtData.map((artistName, i) => (
                <div key={i}>
                    <h2>{artistName.artistName}</h2>
                </div>
            ))}
        </div>
    );
}

export default Home;