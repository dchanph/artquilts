import React from 'react';
import { Link } from 'gatsby';
import { logout } from '../utils/auth';

const Callback = () => {
	return (
		<>
			<p>Callback</p>
			<nav>
				<Link to='/'>Home</Link> <Link to='/contact/'>Payment</Link>{' '}
				<a
					href='#logout'
					onClick={e => {
						logout();
						e.preventDefault();
					}}
				>
					Log Out
				</a>
			</nav>
		</>
	);
};

export default Callback;
