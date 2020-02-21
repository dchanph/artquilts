import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

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
			<div class='card-content'>
				<div class='media'>
					<div class='media-left'>
						<figure class='image is-96x96'>
							<img
								class='is-rounded'
								src='http://www.radfaces.com/images/avatars/linda-barret.jpg'
								alt='linda barret avatar'
							></img>
						</figure>
					</div>
					<div class='media-content'>
						<p class='title is-4'>Gen Lim</p>
						<p class='subtitle is-6'>Gen@quilts.com</p>
					</div>
				</div>
				<div class='content'>
					<p class='subtitle is-5'></p>
					<p>
						Greatly appreciate your interest in my quilted art pieces. It is
						always a pleasure to search out pre-loved fabrics and then create
						delightful artworks out of them. Have fun!
					</p>
					<a>@bulmaio</a>.<a href='#'>#css</a>
					<a href='#'>#responsive</a>
					<br />
				</div>
			</div>
			<div className='columns is-multiline'>
				{crafts.map(craft => (
					<div class='tile column is-6 is-ancestor'>
						<div class='tile is-parent'>
							<div class='tile'>
								<div class='tile'>
									<article class='tile is-child notification is-info'>
										<div key={craft.id}>
											<p class='title'>Craft Info</p>
											<img
												width='450'
												height='450'
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
													<p class='subtitle is-6'>
														Price SGD: {craft.pdtPrice}
													</p>
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
			</div>
		</Layout>
	);
};
export default CraftsPage;
