
import React from 'react';
import JedanFilm from './JedanFilm.jsx';

function Pregled({ filmovi }) {
	return (
		<div className="pregledKomponenta">
			<div>
				{/* <h3>Ovo je pregled filmova</h3> */}

				<table className="tabela" id="myTable">
					<thead>
						<th>Omot</th>
					<th>Naziv Filma</th>
					<th>Ocena</th>
							
					</thead>
					<tbody>
					
						{filmovi.map((film) => (
							
							<tr key={film.id}>
								<td>
									<img className="slikatabela" src={film.slika} />
								</td>
								<td>{film.naziv}</td>
								<td>{film.ocena}</td>
							</tr>
						))}
					</tbody>
				</table>

				{filmovi.map((f) => <JedanFilm film={f} key={f.id} prva={'nije'} />)}
			</div>

			{/* <div>
				<button className="dugmeSortiranje" onClick={window['sortirajOpadajuce']}>
					Prikaži prvo najbolje ocenjene
				</button>
			</div> */}
		</div>
	);
}

export default Pregled;
