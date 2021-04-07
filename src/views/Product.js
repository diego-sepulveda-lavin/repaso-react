import React from "react";
import {useParams, Link} from "react-router-dom"

const Product = () => {

	let {id} = useParams()

	return (
		<div>
			<h1>Soy la pagina de producto y el producto seleccionado es: {id} </h1>
			<Link to="/">Llevame a la pagina Home</Link>
		</div>
	);
};

export default Product;