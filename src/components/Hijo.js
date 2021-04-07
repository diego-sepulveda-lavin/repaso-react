import { React } from "react";

const Hijo = props => {
	return (
		<div>
			<h1>
				Soy el componente Hijo y estoy {props.animo}. Heredé de mi Padre ojos{" "}
				{props.caracteristica}
			</h1>
			<button onClick={props.handleAnimo}>Cambiar animo</button>
		</div>
	);
};

export default Hijo;
