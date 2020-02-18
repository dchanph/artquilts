import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
//import Images from '../posts/images';

const DonatePage = () => {
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
			<section class='hero'>
				<figure class='image'>
					<img src='/sewingkit.jpg'></img>
				</figure>
			</section>
			<br />
			{crafts.map(craft => (
				<div class='tile is-ancestor'>
					<div class='tile is-vertical is-6'>
						<div class='tile'>
							<div class='tile is-parent'>
								<article class='tile is-child notification is-info'>
									<div key={craft.id}>
										<p class='title'>Donate a kit</p>
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
												<p class='subtitle is-6'>
													Category: {craft.pdtCategory}
												</p>
												<p class='subtitle is-6'>Price SGD: {craft.pdtPrice}</p>
												<Link
													to={'/craftDetails/'}
													state={{ craftId: craft.id }}
												>
													More info
												</Link>
											</div>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			))}
			;
			<br />
		</Layout>
	);
};

export default DonatePage;
