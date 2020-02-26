import React from 'react';
import { Link } from 'gatsby';
import { logout } from '../utils/auth';
import Layout from '../components/layout';

class Button extends React.Component {
	componentDidMount() {
		this.stripe = window.Stripe('pk_test_ry46egwEiKoNN2ryQU0FjImL00lui1sPt2', {
			betas: ['checkout_beta_4']
		});
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
				<div class='field is-grouped'></div>
				<button
					type='submit'
					class='button is-link is-halfwidth is-rounded has-text-weight-medium is-medium'
				>
					Click to Pay
				</button>
				<br />
				<br />
			</form>
		);
	}
}

const Callback = () => {
	return (
		<Layout>
			<div class='tile is-ancestor'>
				<div class='tile is-4 is-vertical is-parent'>
					<div class='tile is-child box'>
						<Button />
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
							<img src='/mites.jpg' alt='Art Quilt'></img>
						</figure>
					</div>
				</div>
			</div>
			<br />
		</Layout>
	);
};

export default Callback;
