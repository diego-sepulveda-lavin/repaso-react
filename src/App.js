import React, { useEffect, useState } from "react";

const App = () => {
	const [nombre, setNombre] = useState("Juan");
	const [estado, setEstado] = useState(false)

	useEffect(() => {
		console.log('Yo solo me ejecuto en el montaje') //ComponentDidMount
	}, []);

	useEffect(() => {
		console.log('Yo solo me ejecuto en el montaje o cuando nombre se actualiza') //ComponentDidMount y ComponentDidUpdate
	}, [nombre]);

	useEffect(() => {
		console.log('Yo me ejecuto en el montaje y siempre') // ComponentDidMount y Siempre
	}, );

	const handleName = e => {
		setNombre(e.target.value);
	};

	return (
		<div>
			<h1>Hola mi nombre es {nombre} y el estado es: {estado?"Verdadero":"Falso"}</h1>
			<input onChange={handleName} />
			<button onClick={()=> setEstado(prevState => !prevState)}>Cambiar estado</button>
		</div>
	);
};

export default App;
