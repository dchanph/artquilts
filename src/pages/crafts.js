import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
//import Images from '../posts/images';

const CraftsPage = () => {
	const [crafts, setCrafts] = useState([]);

	useEffect(() => {
		// get data from GitHub api
		fetch('http://localhost:3000/crafts.json')
			.then(response => response.json()) // parse JSON from request
			.then(resultData => {
				console.log('result data', resultData);
				setCrafts(resultData);
			}); // set data for the number of crafts
	}, []);
	return (
		<Layout>
			{/* <h1>My Portfolio</h1>
			<section class='hero is-primary bold'>
				<div class='hero-body'>
					<div class='container'>
						<p class='title is-5'>Our Crafts</p>
						<p class='subtitle is-6'>
							Every quilt is built on a wish. All hand crafted using someone's
							pre-loved fabrics.
						</p>
						<Link to='/donate'> Donate a Kit</Link>
					</div>
				</div>
				<br />
			</section>
			<br /> */}

			<div class='tile is-ancestor'>
				<div class='tile is-vertical is-8'>
					<div class='tile'>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child notification is-primary bold'>
								<p class='title'>Vertical...</p>
								<p class='subtitle'>Top tile</p>
								<figure class='image is-4by3'>
									<img src='https://bulma.io/images/placeholders/640x480.png' />
								</figure>
								<div class='content'>Content</div>
							</article>
							<article class='tile is-child notification is-warning bold'>
								<p class='title'>...tiles</p>
								<p class='subtitle'>Bottom tile</p>
								<figure class='image is-4by3'>
									<img src='https://bulma.io/images/placeholders/640x480.png' />
								</figure>
								<div class='content'>Content</div>
							</article>
						</div>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child notification is-info bold'>
								<p class='title'>Vertical...</p>
								<p class='subtitle'>Top tile</p>
								<figure class='image is-4by3'>
									<img src='https://bulma.io/images/placeholders/640x480.png' />
								</figure>
								<div class='content'>Content</div>
							</article>
							<article class='tile is-child notification is-danger bold'>
								<p class='title'>...tiles</p>
								<p class='subtitle'>Bottom tile</p>
								<figure class='image is-4by3'>
									<img src='https://bulma.io/images/placeholders/640x480.png' />
								</figure>
								<div class='content'>Content</div>
							</article>
						</div>
					</div>
				</div>
			</div>
			{crafts.map(craft => (
				<div key={craft.id}>
					<p>
						<img
							width='150'
							src={'http://localhost:3000' + craft.pdtImg}
							alt={craft.pdtName}
						></img>
					</p>
					<p>{craft.pdtName}</p>
					<p>{craft.pdtCategory}</p>
					<p>{craft.pdtPrice}</p>
					<Link to={'/craftDetails/'} state={{ craftId: craft.id }}>
						Craft details
					</Link>
				</div>
			))}
			<p>
				Every quilt is built on a wish. Every quilted product uses someone's
				preloved fabric cuts.
				<Link to='/donate'> Donate a Kit</Link>
			</p>
		</Layout>
	);
};

export default CraftsPage;
