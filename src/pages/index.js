import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Hello.</h1>
			<h2>I'm Doreen. Quilting is my passion. Quilting runs in my family.</h2>
			<p>
				Need a quilter? <Link to='/contact'>Contact me here.</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
