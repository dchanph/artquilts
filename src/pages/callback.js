import React from 'react';
import { Link } from 'gatsby';
import { logout } from '../utils/auth';
import Layout from '../components/layout';

import SEO from '../components/seo';

const Callback = () => {
	class Button extends React.Component {
		componentDidMount() {
			this.stripe = window.Stripe(
				'pk_test_ry46egwEiKoNN2ryQU0FjImL00lui1sPt2',
				{
					betas: ['checkout_beta_4']
				}
			);
		}

		render() {
			return (
				<form
					onSubmit={event => {
						console.log('hello?');
						event.preventDefault();
						this.stripe
							.redirectToCheckout({
								items: [{ sku: 'sku_GmmUSzaydlKPeA', quantity: 1 }],

								// Note that it is not guaranteed your customers will be redirected to this
								// URL *100%* of the time, it's possible that they could e.g. close the
								// tab between form submission and the redirect.
								successUrl: 'http://localhost:8000/success',
								cancelUrl: 'http://localhost:8000/canceled'
							})
							.then(function(result) {
								if (result.error) {
									// If `redirectToCheckout` fails due to a browser or network
									// error, display the localized error message to your customer.
									var displayError = document.getElementById('error-message');
									displayError.textContent = result.error.message;
								}
							});
					}}
				>
					<button type='submit'>Buy Pants</button>
				</form>
			);
		}
	}

	const Purchase = () => {
		return (
			<Layout>
				<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
				{/* <h1>Buy quilts</h1> */}
				<p>Make a Purchase</p>
				<p>Callback</p>
				<nav>
					<Link to='/'>Home</Link>{' '}
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
			</Layout>
		);
	};
};

export default Callback;
