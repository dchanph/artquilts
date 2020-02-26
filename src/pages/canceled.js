import React from 'react';
import { logout } from '../utils/auth';

import Layout from '../components/layout';

const SecondPage = () => (
	<Layout>
		<div class='tile is-ancestor'>
			<div class='tile is-4 is-vertical is-parent'>
				<div class='tile is-child box'>
					<h4 class='title is-3'>Transaction is Cancelled</h4>
					<br />
					<p>No $$$ is deducted. </p>
					<p>Thank you for visiting us and have an awesome day:)!</p>
					<br></br>
					<br />
					<a
						class='button is-link is-halfwidth is-rounded has-text-weight-medium is-medium'
						href='#logout'
						onClick={e => {
							logout();
							e.preventDefault();
						}}
					>
						Log Out
					</a>
				</div>
			</div>
			<div class='tile is-parent'>
				<div class='tile is-child box'>
					<figure class='image is 128x128'>
						<img src='/kiddy.jpg' alt='Art Quilt'></img>
					</figure>
				</div>
			</div>
		</div>
		<br />
	</Layout>
);

export default SecondPage;
