import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { logout } from '../utils/auth';

const SuccessPage = () => (
	<Layout>
		<div class='tile is-ancestor'>
			<div class='tile is-4 is-vertical is-parent'>
				<div class='tile is-child box'>
					<h4 class='title is-3'>Transaction is Completed</h4>
					<br />
					<p>
						Thank you for supporting Art Quilt! You will inspire us to better
						our communities.
					</p>
					<br />
					<p>May you have an awesome day:)!</p>
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
						<img src='/tallgifs.jpg' alt='Art Quilt'></img>
					</figure>
				</div>
			</div>
		</div>
		<br />
		<br />
	</Layout>
);

export default SuccessPage;
