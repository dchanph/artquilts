import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
//import Img from 'gatsby-image';
import Layout from '../components/layout';

const CraftDetails = ({ location }) => {
	const [craft, setCraft] = useState({});
	const craftId = location.state.craftId;

	useEffect(() => {
		// get data from GitHub api
		fetch('http://localhost:3000/crafts/' + craftId + '.json')
			.then(response => response.json()) // parse JSON from request
			.then(resultData => {
				console.log('result data', resultData);
				setCraft(resultData);
			}); // set data for the number of crafts
	}, []);

	// const mapCraftsToItem = craft =>
	// craft.map(({node: {id, pdtImg, pdtName, pdtCategory,pdtPrice}}))
	return (
		<Layout>
			<p>
				Every item is built on a wish. Every quilted product uses someone's
				preloved fabric cuts.
				<Link to='/donate'> Donate a Kit </Link>
			</p>
			<h1>Craft Description</h1>
			<div key={craft.id}>
				<p>
					<img
						width='250'
						src={'http://localhost:3000' + craft.pdtImg}
						alt={craft.pdtName}
					></img>
				</p>
				<p>{craft.pdtName}</p>
				<p>{craft.pdtCategory}</p>
				<p>{craft.pdtPrice}</p>
			</div>
		</Layout>
	);
};

// {crafts.map(craft => (
// 	as: Link,
// 	to: `/craft/${id}/`,
// 	childKey: id,
// 	image: (
// 		<Image>
// 		<Img sizes ={mainImage.childImageSharp.sizes} alt={pdtName} />
// 		</Image>
// 	)
// 	<div key={craft.id}>
// 		<p>{craft.pdtImg}</p>
// 		<p>{craft.pdtName}</p>
// 		<p>{craft.pdtCategory}</p>
// 		<p>{craft.pdtPrice}</p>
// 	</div>
// ))}

export default CraftDetails;
