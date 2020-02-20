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

	console.log(craft);

	return (
		<Layout>
			<div className='tile is-ancestor'>
				<div className='tile is-vertical is-8'>
					<div className='tile'>
						<div className='tile is-parent'>
							<article className='tile is-child notification is-info'>
								<div key={craft.id}>
									<p className='title'>Craft Info</p>
									<img
										width='400'
										src={'http://localhost:3000' + craft.pdtImg}
										alt={craft.pdtName}
									></img>
								</div>
								<div className='card-content'>
									<div className='media'>
										<div className='media-content'>
											<p className='title is-4'>{craft.pdtName}</p>
											<p className='subtitle is-6'>
												Category: {craft.pdtCategory}
											</p>
											<p className='subtitle is-6'>
												Price SGD: {craft.pdtPrice}
											</p>
											<p className='subtitle is-6'>
												Kit:
												{craft.donatekits
													? craft.donatekits[0].kitDetails
													: 'No Kits Available'}
											</p>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
			<div className='buttons'>
				<button className='is-Link is-fullwidth has-text-weight-strong is-strong'>
					<Link to='/contact'>Purchase Craft</Link>
				</button>
				<button className='is-Link is-fullwidth has-text-weight-strong is-strong'>
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
