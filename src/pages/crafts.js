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
			<h1>My Portfolio</h1>
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
