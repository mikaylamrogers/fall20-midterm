import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

// import {  useHistory  } from 'react-router-dom';

function Home() {
    const [wikiArtData, setWikiArtData] = useState([]);
    const [museumData, setMuseumData] = useState([]);

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

    // MET //
    useEffect(() => {
        axios
        .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/437133")
            
        .then(function (response) {
                const artlocationresponse = response.data;
                setMuseumData(artlocationresponse);
        })
        .catch(function (error) {
            console.warn(error);
        });
    }, []);
    console.log("MuseumData", museumData);


    // const {  popUp  } = useMemo(() => {
    //     const popUp = wikiArtData[0];
    //     return {  popUp  }
    // }, [wikiArtData])


    return (
        <div>
            <h1>HOME</h1>
            {wikiArtData.map((artistName, i) => (
                <div key={i}>
                    <h2>{artistName.artistName}</h2>
                </div>
            ))}

            {museumData && museumData.objectID.map((info, index) => (
                <div key={index}>
                    <h1>{info.GalleryNumber}</h1>

                </div>
            ))}

        </div>
    );
}

export default Home;