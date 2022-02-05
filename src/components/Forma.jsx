import React from 'react';
import { useHistory } from "react-router-dom";
import Polje from "./Polje.jsx"

function Forma({ prijava }) {


	return (
    <div>
    <form className="forma">
      {prijava === 'registracija' ? (
        <h2 className="prijavaforma" for="forma">
          Registracija
        </h2>
      ) : (prijava==='prijava'? (
        <h2 className="prijavaforma" for="forma">
          Prijava
        </h2>
      ):(
      <h2 className="prijavaforma" for="forma">
          Recenzija
        </h2>
      ))}
          

        

        <Polje/>
				
        {prijava === "recenzija" ? (
          <>
        <div className="form-group">
              <label for="formGroupExampleInput">Ime i prezime</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Ime i prezime"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Recenzija sajta</label>
              <textarea name="" id="" cols="40" rows="10" placeholder="Kritike, predlozi, sugestije..." ></textarea>
            </div>
            
            <div className="btnForma">
              <button onClick={()=>{ alert('Uspesno ste se poslali recenziju!'); }} className="dugme1" type="submit">
                Pošalji recenziju
              </button>
            </div>

            </>) :
             (prijava==='prijava'?  (<>
              <div className="form-group">
			      	<label for="formGroupExampleInput2">Lozinka</label>
			    	  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Lozinka" />
			        </div>
            <div className="btnForma">
              <button onClick={()=>{ alert('Uspesno ste se prijavili!'); }} className="dugme1" type="submit">
                Prijava
              </button>
            </div>
            
            </>):(
          <>
          <div className="form-group">
			      	<label for="formGroupExampleInput2">Lozinka</label>
			    	  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Lozinka" />
			        </div>
        <div className="form-group">
              <label for="formGroupExampleInput">Ime</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Ime"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Prezime</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Prezime"
              />
            </div>
            <div className="btnForma">
              <button onClick={()=>{ alert('Uspesno ste se registrovali!'); }} className="dugme1" type="submit">
                Registracija
              </button>
            </div>

            </>))}

           
			</form>
		</div>
	);
}

export default Forma;
