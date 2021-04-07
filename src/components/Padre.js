import React, { useState } from "react";
import Hermano from "./Hermano";
import Hijo from "./Hijo";

const Padre = () => {
	const [colorOjos, setColorOjos] = useState("verdes");

	const handleColorOjos = () => {
		if (colorOjos === "verdes") {
			setColorOjos("cafes");
		} else if (colorOjos === "cafes") {
			setColorOjos("verdes");
		}
	};


    const [animo, setAnimo] = useState("Feliz")

    const handleAnimo = () => {
        if (animo === "Feliz"){
            setAnimo("Enojado")
        } else if(animo === "Enojado"){
            setAnimo("Feliz")
        }
    }

	return (
		<div>
			<h1>Soy el componente Padre y tengo los ojos {colorOjos}</h1>
			<button onClick={handleColorOjos}>Cambiar color</button>
			<Hijo caracteristica={colorOjos} animo={animo} handleAnimo={handleAnimo}/>
            <Hermano animo={animo}/>
		</div>
	);
};

export default Padre;
