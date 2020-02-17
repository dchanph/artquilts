import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
	return (
		<Layout>
			<section class='hero is-fullheight'>
				<div class='hero-body'>
					<div class='container has-text-centred'>
						<div class='columns is-12 is-variable '>
							<div class='column is-half has-text-left'>
								<h1 class='title is-1'>Contact Us</h1>
								<p class='is-size-4'>Get in touch:) </p>
								<br />
								<p class='is-size-4'>By phone: 65 - 6123 4567</p>
								<br />
								<p class='is-size-4'>By email: art@quilts.com</p>
								<br />
								<div class='social-media'>
									<script
										defer
										src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'
									></script>
									<a
										href='https://facebook.com'
										target='_blank'
										class='button is-medium is-large'
									>
										<i class='fa fa-facebook-square' aria-hidden='true'></i>
									</a>
									<a
										href='https://instagram.com'
										target='_blank'
										class='button is-medium is-large'
									>
										<i class='fa fa-instagram' aria-hidden='true'></i>
									</a>
									<a
										href='https://twitter.com'
										target='_blank'
										class='button is-medium is-large'
									>
										<i class='fa fa-twitter' aria-hidden='true'></i>
									</a>
								</div>
							</div>
							<div class='column is-one-third has-text-left'>
								<div class='field'>
									<label class='label'>Name</label>
									<div class='control'>
										<input class='input is-medium' type='text'></input>
									</div>
								</div>
								<div class='field'>
									<label class='label'>Email</label>
									<div class='control'>
										<input class='input is-medium' type='text'></input>
									</div>
								</div>
								<div class='field'>
									<label class='label'>Message</label>
									<div class='control'>
										<textarea class='textarea is-medium'></textarea>
									</div>
								</div>
								<div class='control'>
									<button
										type='submit'
										class='button is-link is-fullwidth has-text-weight-medium is-medium'
									>
										Send Message
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ContactPage;
