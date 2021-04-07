import React, {useEffect, useState} from "react";

const App = () => {

	const [estado, setEstado] = useState(null)

	useEffect(()=>{
		fetch('https://swapi.dev/api/people/1/')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setEstado(data)
		})
		.catch(error => console.log(error))
	},[])

	return (
		<div>
			<h1>Hola Mundo, mi nombre es {!!estado? estado.name : '...cargando'}</h1>
		</div>
	);
};

export default App;
