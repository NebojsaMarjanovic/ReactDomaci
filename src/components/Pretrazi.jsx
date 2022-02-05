import React from 'react';
import { BsSearch } from 'react-icons/bs';


function Pretrazi() {
	return (
		<button className="dugmePretraga">
				<BsSearch className="search" />
				<input
					type="text"
					id="myInput"
					onKeyUp={window['funkcijaZaPretragu']}
					placeholder="Pretrazi filmove po nazivu"
				/>
			</button>
	);
}

export default Pretrazi;
