import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
//import Images from '../posts/images';

const DonatePage = () => {
	const [donatekits, setDonatekits] = useState([]);

	useEffect(() => {
		// get data from GitHub api
		fetch('https://frozen-springs-21718.herokuapp.com/donatekits.json')
			.then(response => response.json()) // parse JSON from request
			.then(resultData => {
				console.log('result data', resultData);
				setDonatekits(resultData);
			}); // set data for the number of crafts
	}, []);
	return (
		<Layout>
			<section class='hero'>
				<figure class='image'>
					<img src='/sewingkit.jpg'></img>
				</figure>
			</section>
			<div className='columns is-multiline'>
				{donatekits.map(donatekit => (
					<div class='tile column is-6 is-ancestor'>
						<div class='tile is-parent'>
							<div class='tile'>
								<div class='tile'>
									<article class='tile is-child notification is-warning'>
										<div key={donatekit.id}>
											<p class='title'>Donate a Kit</p>
											<img
												width='450'
												height='450'
												src={donatekit.kitImg}
												alt={donatekit.kitName}
											></img>
										</div>
										<div class='card-content'>
											<div class='media'>
												<div class='media-content'>
													<p class='title is-4'>{donatekit.kitName}</p>
													<p class='subtitle is-6'>
														Category: {donatekit.kitCategory}
													</p>
													<p class='subtitle is-6'>
														Kit Cost SGD: {donatekit.kitCost}
													</p>
													<p class='subtitle is-6'>
														Materials: {donatekit.kitDetails}
													</p>
													<Link
														to={'/account/billing'}
														state={{ donatekitId: donatekit.id }}
													>
														Donate
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
			<br />
		</Layout>
	);
};
export default DonatePage;
