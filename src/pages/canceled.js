import React from 'react';
import { Link } from 'gatsby';
import { logout } from '../utils/auth';

import Layout from '../components/layout';

const SecondPage = () => (
	<Layout>
		<h1>Cancelled</h1>
		<br />
		<p>There is no fund deduction. Do visit us again. Thank you.</p>
		<br></br>
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

export default SecondPage;
