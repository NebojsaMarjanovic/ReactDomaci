import React from 'react'
import { BsHeart, BsCheck2, BsCheckLg,BsEye} from "react-icons/bs";
import { FiMoreHorizontal} from "react-icons/fi";
import { useState } from "react";

function JedanFilm({film, prva, povecajZaJedan}) {
    
    

    const[opisFilma, setOpisFilma] = useState("");
    const[i, seti] = useState(0);
    function prikaziOpis(){
        if(i % 2 === 0){
          setOpisFilma(film.opisFilma);
        }else{
          setOpisFilma("");
        }
        console.log(i);
       seti(i+1);
    }
    

    return (
        <div className = "jedanFilm">

        {prva === "jeste" ? (
        <>
        <div>
        <img
        className="slika"
        src={film.slika}
      />
      <div className = "opisFilma">{opisFilma}</div>
      </div>
      

      <div className="jedanFilmTekst">
        <p className="jedanFilmNaslov">{film.naziv}</p>
        <p className="jedanFilmOpis">{film.opis}</p>
      </div>


      <button className="btn3" onClick = {() => povecajZaJedan(film.id)}> 
         <BsEye /> 
       </button>

      

      <button className="btn2" onClick={prikaziOpis}> 
         <FiMoreHorizontal /> 
       </button>
       

       </>) : (<>
        
       
        

        {/* <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody> */}

        {/* <h2>Naziv: {film.naziv}</h2> */}
       {/* <h3>Ocena: {film.ocena}</h3> */}
       {/* <h3>Pregled: {film.pregled}</h3> */}
       


       </>)}
     
      
      </div>
    )
}

export default JedanFilm
