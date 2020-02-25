import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { logout } from '../utils/auth';

const SuccessPage = () => (
	<Layout>
		<h1>Funds Receipt Confirmation</h1>
		<br />
		<br />
		<p>
			Thank you for supporting Arts Quilt. Your gesture is very much
			appreciated.
		</p>
		<br />
		<br />
		<a
			href='#logout'
			onClick={e => {
				logout();
				e.preventDefault();
			}}
		>
			Log Out
		</a>
		<br />
		<br />
	</Layout>
);

export default SuccessPage;
