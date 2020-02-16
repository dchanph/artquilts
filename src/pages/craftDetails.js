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
			<div class='tile is-ancestor'>
				<div class='tile is-vertical is-8'>
					<div class='tile'>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child notification is-primary'>
								<p class='title'>Vertical...</p>
								<p class='subtitle'>Top tile</p>
							</article>
							<article class='tile is-child notification is-warning'>
								<p class='title'>...tiles</p>
								<p class='subtitle'>Bottom tile</p>
							</article>
						</div>
						<div class='tile is-parent'>
							<article class='tile is-child notification is-info'>
								<p class='title'>Middle tile</p>
								<p class='subtitle'>With an image</p>
								<figure class='image is-4by3'>
									<img src='https://bulma.io/images/placeholders/640x480.png' />
								</figure>
							</article>
						</div>
					</div>
					<div class='tile is-parent'>
						<article class='tile is-child notification is-danger'>
							<p class='title'>Wide tile</p>
							<p class='subtitle'>Aligned with the right tile</p>
							<div class='content'>Content</div>
						</article>
					</div>
				</div>
				<div class='tile is-parent'>
					<article class='tile is-child notification is-success'>
						<div class='content'>
							<p class='title'>Tall tile</p>
							<p class='subtitle'>With even more content</p>
							<div class='content'>Content</div>
						</div>
					</article>
				</div>
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
