import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Hello:)</h1>
			<h2>
				I'm Gen. Welcome to Art Quilts! Hand crafting designs based on your
				wish. Using recycled resources to gift an art.
			</h2>
			<p>
				Order a product? <Link to='/contact'>Contact me here.</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
