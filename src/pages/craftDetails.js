import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
//import Img from 'gatsby-image';

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
			<div class='tile is-ancestor'>
				<div class='tile is-vertical is-8'>
					<div class='tile'>
						<div class='tile is-parent'>
							<article class='tile is-child notification is-info'>
								<div key={craft.id}>
									<p class='title'>Craft Info</p>
									<img
										width='450'
										src={'http://localhost:3000' + craft.pdtImg}
										alt={craft.pdtName}
									></img>
								</div>
								<div class='card-content'>
									<div class='media'>
										<div class='media-content'>
											<p class='title is-4'>{craft.pdtName}</p>
											<p class='subtitle is-6'>Category: {craft.pdtCategory}</p>
											<p class='subtitle is-6'>Price SGD: {craft.pdtPrice}</p>
											<p>Product description:</p>
											<p>Quilted duck in pastel fabrics.</p>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
			<div class='buttons'>
				<button class='button is-success is-light $title-strong-weight'>
					<Link to='/contact'>Purchase Craft</Link>
				</button>
				<button class='button is-link is-light $title-strong-weight'>
					<Link to='/donate'>Donate a Kit</Link>
				</button>
			</div>
			<br />
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
