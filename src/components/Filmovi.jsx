import React from 'react'
import JedanFilm from "./JedanFilm.jsx";


function Filmovi({filmovi, povecajZaJedan}) {

    

    return (
        <div className = "filmovi">
            {/* <JedanFilm id = {0} pregled = {0} naziv = {"Hari Poter i dvorana tajni"} opis = {"2002 | avanturisticki"} slika = {HarryPotterDvoranaTajni} ocena = {7.4} />
            <JedanFilm id = {1} pregled = {0} naziv = {"Hari Poter i Kamen mudrosti"} opis = {"2001 | avanturisticki"} slika = {HarryPotterIKamenMudrosti} ocena = {7.6} />
            <JedanFilm id = {2} pregled = {0} naziv = {"Hari Poter i vatreni pehar"} opis = {"2011 | avanturisticki"} slika = {HarryPotterIVatreniPehar} ocena = {8.1} />
            <JedanFilm id = {3} pregled = {0} naziv = {"Hari Poter i polukrvni princ"} opis = {"2009 | avanturisticki"} slika = {HarryPotterIPolukrvniPrinc} ocena = {7.6} />
            <JedanFilm id = {4} pregled = {0} naziv = {"Hari Poter i zatvorenik"} opis = {"2004 | avanturisticki"} slika = {HarryPotterIZatvorenik} ocena = {7.9} />
            <JedanFilm id = {5} pregled = {0} naziv = {"Gospodar prstenova I"} opis = {"2001 | avanturisticki"} slika = {GospodarPrstenova1} ocena = {8.8} /> */}

            {filmovi.map((f)=> (<JedanFilm film = {f} key = {f.id} prva = {"jeste"} povecajZaJedan = {povecajZaJedan}/>))}
            


            {/* <JedanFilm film = {filmovi[0]}/>
            <JedanFilm film = {filmovi[1]}/>
            <JedanFilm film = {filmovi[2]}/>
            <JedanFilm film = {filmovi[3]}/>
            <JedanFilm film = {filmovi[4]}/>
            <JedanFilm film = {filmovi[5]}/> */}


        </div>
    )
}

export default Filmovi
