import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function Home() {
    const [wikiArtData, setWikiArtData] = useState(null);

    // console.log('ENV VALUE', process.env.API_SESSION_KEY);

    // WIKIART //
    useEffect(() => {
        axios
        .get("https://cors-anywhere.herokuapp.com/https://www.wikiart.org/en/app/api/popularartists?&authSessionKey=8a591029e9fa")
        
        .then(function (response) {
            const popularartistsresponse = response.data;
            setWikiArtData(popularartistsresponse);
        })

        .catch(function (error) {
            console.warn(error);
        });
    }, []);

    const {
        EdvardMunch,
        Caravaggio,
        Michelangelo,
        GeorgesSeurat,
        MarcChagall,
        Basquiat,
        VincentvanGogh,
        ManRay,
        ClaudeMonet,
        HenriMatisse,
        PaulCezanne,
        SalvadorDali,
        PabloPicasso,
        LeonardodaVinci,
        AndyWarhol,
        JohannesVermeer,
        GeorgiaOKeeffe,
        MarcelDuchamp,
        PaulSignac,
        LaszloMoholyNagy,
    } = useMemo(() => {
        let EdvardMunch = '';
        let Caravaggio = '';
        let Michelangelo = '';
        let GeorgesSeurat = '';
        let MarcChagall = '';
        let Basquiat = '';
        let VincentvanGogh = '';
        let ManRay = '';
        let ClaudeMonet = '';
        let HenriMatisse = '';
        let PaulCezanne = '';
        let SalvadorDali = '';
        let PabloPicasso = '';
        let LeonardodaVinci = '';
        let AndyWarhol = '';
        let JohannesVermeer = '';
        let GeorgiaOKeeffe = '';
        let MarcelDuchamp = '';
        let PaulSignac = '';
        let LaszloMoholyNagy = '';
        
        if (wikiArtData) {
            EdvardMunch = wikiArtData.find(artist => artist.artistName === 'Edvard Munch');
            Caravaggio = wikiArtData.find(artist => artist.artistName === 'Caravaggio');
            Michelangelo = wikiArtData.find(artist => artist.artistName === 'Michelangelo');
            GeorgesSeurat = wikiArtData.find(artist => artist.artistName === 'Georges Seurat');
            MarcChagall = wikiArtData.find(artist => artist.artistName === 'Marc Chagall');
            Basquiat = wikiArtData.find(artist => artist.artistName === 'Jean-Michel Basquiat');
            VincentvanGogh = wikiArtData.find(artist => artist.artistName === 'Vincent van Gogh');
            ManRay = wikiArtData.find(artist => artist.artistName === 'Man Ray');
            ClaudeMonet = wikiArtData.find(artist => artist.artistName === 'Claude Monet');
            HenriMatisse = wikiArtData.find(artist => artist.artistName === 'Henri Matisse');
            PaulCezanne = wikiArtData.find(artist => artist.artistName === 'Paul Cezanne');
            SalvadorDali = wikiArtData.find(artist => artist.artistName === 'Salvador Dali');
            PabloPicasso = wikiArtData.find(artist => artist.artistName === 'Pablo Picasso');
            LeonardodaVinci = wikiArtData.find(artist => artist.artistName === 'Leonardo da Vinci');
            AndyWarhol = wikiArtData.find(artist => artist.artistName === 'Andy Warhol');
            JohannesVermeer = wikiArtData.find(artist => artist.artistName === 'Johannes Vermeer');
            GeorgiaOKeeffe = wikiArtData.find(artist => artist.artistName === "Georgia O'Keeffe");
            MarcelDuchamp = wikiArtData.find(artist => artist.artistName === 'Marcel Duchamp');
            PaulSignac = wikiArtData.find(artist => artist.artistName === 'Paul Signac');
            LaszloMoholyNagy = wikiArtData.find(artist => artist.artistName === 'Laszlo Moholy-Nagy');
        }

        return {
            EdvardMunch,
            Caravaggio,
            Michelangelo,
            GeorgesSeurat,
            MarcChagall,
            Basquiat,
            VincentvanGogh,
            ManRay,
            ClaudeMonet,
            HenriMatisse,
            PaulCezanne,
            SalvadorDali,
            PabloPicasso,
            LeonardodaVinci,
            AndyWarhol,
            JohannesVermeer,
            GeorgiaOKeeffe,
            MarcelDuchamp,
            PaulSignac,
            LaszloMoholyNagy,
        };
    }, [wikiArtData]);
    
    // ZODIAC SIGN //
    const [signData, setSignData] = useState(null);

    useEffect(() => {
        axios
        .get("https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/api")
            
        .then(function (response) {
                const signresponse = response.data;
                setSignData(signresponse);
        })
        .catch(function (error) {
            console.warn(error);
        });
    }, []);

    const {
        Aries,
        Taurus,
        Gemini,
        Cancer,
        Leo,
        Virgo,
        Libra,
        Scorpio,
        Sagittarius,
        Capricorn,
        Aquarius,
        Pisces,
    } = useMemo(() => {
        let Aries = '';
        let Taurus = '';
        let Gemini = '';
        let Cancer = '';
        let Leo = '';
        let Virgo = '';
        let Libra = '';
        let Scorpio = '';
        let Sagittarius = '';
        let Capricorn = '';
        let Aquarius = '';
        let Pisces = '';
        
        if (signData) {
            Aries = signData.find(sign => sign.name === 'Aries');
            Taurus = signData.find(sign => sign.name === 'Taurus');
            Gemini = signData.find(sign => sign.name === 'Gemini');
            Cancer = signData.find(sign => sign.name === 'Cancer');
            Leo = signData.find(sign => sign.name === 'Leo');
            Virgo = signData.find(sign => sign.name === 'Virgo');
            Libra = signData.find(sign => sign.name === 'Libra');
            Scorpio = signData.find(sign => sign.name === 'Scorpio');
            Sagittarius = signData.find(sign => sign.name === 'Sagittarius');
            Capricorn = signData.find(sign => sign.name === 'Capricorn');
            Aquarius = signData.find(sign => sign.name === 'Aquarius');
            Pisces = signData.find(sign => sign.name === 'Pisces');
        }

        return {
            Aries,
            Taurus,
            Gemini,
            Cancer,
            Leo,
            Virgo,
            Libra,
            Scorpio,
            Sagittarius,
            Capricorn,
            Aquarius,
            Pisces,
        };
    }, [signData]);


    return (
        <div>
            <div className="Caravaggio">
                <h2>{Caravaggio.artistName}</h2>
                    <h3>{Caravaggio.birthDayAsString}</h3>
                    <h4 className="Libra">{Libra.name}</h4>
                    <p className="Traits">{Libra.mental_traits}</p>
            </div>

            <div className="ManRay">
                <h2>{ManRay.artistName}</h2>
                    <h3>{ManRay.birthDayAsString}</h3>
                    <h4 className="Virgo">{Virgo.name}</h4>
                    <p className="Traits">{Virgo.mental_traits}</p>
            </div>

            <div className="Basquiat">
                <h2>{Basquiat.artistName}</h2>
                    <h3>{Basquiat.birthDayAsString}</h3>
                    <h4 className="Capricorn">{Capricorn.name}</h4>
                    <p className="Traits">{Capricorn.mental_traits}</p>
             </div>

             <div className="LaszloMoholyNagy">
                <h2>{LaszloMoholyNagy.artistName}</h2>
                    <h3>{LaszloMoholyNagy.birthDayAsString}</h3>
                    <h4 className="Cancer">{Cancer.name}</h4>
                    <p className="Traits">{Cancer.mental_traits}</p>
            </div>

            <div className="ClaudeMonet">
                <h2>{ClaudeMonet.artistName}</h2>
                    <h3>{ClaudeMonet.birthDayAsString}</h3>
                    <h4 className="Scorpio">{Scorpio.name}</h4>
                    <p className="Traits">{Scorpio.mental_traits}</p>
            </div>

            <div className="Michelangelo">
                <h2>{Michelangelo.artistName}</h2>
                    <h3>{Michelangelo.birthDayAsString}</h3>
                    <h4 className="Pisces">{Pisces.name}</h4>
                    <p className="Traits">{Pisces.mental_traits}</p>
            </div>

            <div className="MarcChagall">
                <h2>{MarcChagall.artistName}</h2>
                    <h3>{MarcChagall.birthDayAsString}</h3>
                    <h4 className="Cancer">{Cancer.name}</h4>
                    <p className="Traits">{Cancer.mental_traits}</p>
            </div>

            <div className="VincentvanGogh">
                <h2>{VincentvanGogh.artistName}</h2>
                    <h3>{VincentvanGogh.birthDayAsString}</h3>
                    <h4 className="Aries">{Aries.name}</h4>
                    <p className="Traits">{Aries.mental_traits}</p>
            </div>

            <div className="GeorgesSeurat">
                <h2>{GeorgesSeurat.artistName}</h2>
                    <h3>{GeorgesSeurat.birthDayAsString}</h3>
                    <h4 className="Sagittarius">{Sagittarius.name}</h4>
                    <p className="Traits">{Sagittarius.mental_traits}</p>
            </div>

            <div className="PaulCezanne">
                <h2>{PaulCezanne.artistName}</h2>
                    <h3>{PaulCezanne.birthDayAsString}</h3>
                    <h4 className="Capricorn">{Capricorn.name}</h4>
                    <p className="Traits">{Capricorn.mental_traits}</p>
            </div>

            <div className="PabloPicasso">
                <h2>{PabloPicasso.artistName}</h2>
                    <h3>{PabloPicasso.birthDayAsString}</h3>
                    <h4 className="Scorpio">{Scorpio.name}</h4>
                    <p className="Traits">{Scorpio.mental_traits}</p>
            </div>

            <div className="LeonardodaVinci">
                <h2>{LeonardodaVinci.artistName}</h2>
                    <h3>{LeonardodaVinci.birthDayAsString}</h3>
                    <h4 className="Aries">{Aries.name}</h4>
                    <p className="Traits">{Aries.mental_traits}</p>
            </div>

            <div className="HenriMatisse">
                <h2>{HenriMatisse.artistName}</h2>
                    <h3>{HenriMatisse.birthDayAsString}</h3>
                    <h4 className="Capricorn">{Capricorn.name}</h4>
                    <p className="Traits">{Capricorn.mental_traits}</p>
            </div>

            <div className="AndyWarhol">
                <h2>{AndyWarhol.artistName}</h2>
                    <h3>{AndyWarhol.birthDayAsString}</h3>
                    <h4 className="Leo">{Leo.name}</h4>
                    <p className="Traits">{Leo.mental_traits}</p>
            </div>

            <div className="JohannesVermeer">
                <h2>{JohannesVermeer.artistName}</h2>
                    <h3>{JohannesVermeer.birthDayAsString}</h3>
                    <h4 className="Scorpio">{Scorpio.name}</h4>
                    <p className="Traits">{Scorpio.mental_traits}</p>
            </div>

            <div className="SalvadorDali">
                <h2>{SalvadorDali.artistName}</h2>
                    <h3>{SalvadorDali.birthDayAsString}</h3>
                    <h4 className="Taurus">{Taurus.name}</h4>
                    <p className="Traits">{Taurus.mental_traits}</p>
            </div>

            <div className="GeorgiaOKeeffe">
                <h2>{GeorgiaOKeeffe.artistName}</h2>
                    <h3>{GeorgiaOKeeffe.birthDayAsString}</h3>
                    <h4 className="Scorpio">{Scorpio.name}</h4>
                    <p className="Traits">{Scorpio.mental_traits}</p>
            </div>

            <div className="MarcelDuchamp">
                <h2>{MarcelDuchamp.artistName}</h2>
                    <h3>{MarcelDuchamp.birthDayAsString}</h3>
                    <h4 className="Leo">{Leo.name}</h4>
                    <p className="Traits">{Leo.mental_traits}</p>
            </div>

            <div className="Edvard">
                <h2>{EdvardMunch.artistName}</h2>
                    <h3>{EdvardMunch.birthDayAsString}</h3>
                    <h4 className="Sagittarius">{Sagittarius.name}</h4>
                    <p className="Traits">{Sagittarius.mental_traits}</p>
            </div>

            <div className="PaulSignac">
                <h2>{PaulSignac.artistName}</h2>
                    <h3>{PaulSignac.birthDayAsString}</h3>
                    <h4 className="Scorpio">{Scorpio.name}</h4>
                    <p className="Traits">{Scorpio.mental_traits}</p>
            </div>
        </div>
    );
}

export default Home;