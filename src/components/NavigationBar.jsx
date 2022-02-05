import React from 'react';
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';
import DomaciFilmovi from '../img/DomaciFilmovi.jpg';

function NavigationBar() {
	return (
		<div className="navigationBar">
			<div className="logo">
			<img src={DomaciFilmovi} alt="Logo" />
			</div>
			<Link to="/" className="najgledaniji">
				Najgledaniji filmovi
			</Link>
			<Link to="/pregled" className="pregled">
				Gledaj kasnije
			</Link>
			<Link to="/recenzija" className="recenzija">
				Recenzija
			</Link>
			<Link to="/prijava" className="prijava">
				Prijava
			</Link>
			<Link to="/registracija" className="registracija">
				Registracija
			</Link>
			
			
		</div>
	);
}

export default NavigationBar;
