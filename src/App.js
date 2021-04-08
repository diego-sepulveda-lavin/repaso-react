import React, { useEffect, useState } from "react";

const App = () => {
	const [estado, setEstado] = useState({
		activo: false,
		nombre: "",
		favoritos: []
	});


	const [activo, setActivo] = useState(false)
	const [nombre, setNombre] = useState("")
	const [favoritos, setFavoritos] = useState([])



	const handleName = e => {
		setEstado(prevState => ({ ...prevState, nombre: e.target.value }));
		setNombre(e.target.value)
	};

	const handleActivo = () => {
		setEstado(prevState => ({ ...prevState, activo: !prevState.activo }));
	};

	const handleFav = () =>{
		let newFav = {id:1, nombre:"Luke"}
		let favcopy = [...estado.favoritos]
		favcopy.push(newFav)
		setEstado(prevState=>({...prevState, favoritos:favcopy}))
	}

	return (
		<div>
			<h1>Hola Mundo</h1>
			<input onChange={handleName} />
			<button onClick={handleActivo}>Cambiar activo</button>
			<button onClick={handleFav}>Agregar a Fav</button>
		</div>
	);
};



export default App;
