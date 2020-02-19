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
								<h1 class='title is-1'>Keep in touch:)</h1>
								<p class='is-size-5'></p>
								<br />
								<p class='is-size-5'>By phone: 65 - 6123 4567</p>
								<br />
								<p class='is-size-5'>By email: art@quilts.com</p>
								<br />
								<div class='social-media'>
									<p class='card-footer-item'>
										View on{' '}
										<a href='https://twitter.com/codinghorror/status/506010907021828096'>
											Twitter
										</a>
										<p class='card-footer-item'>
											<span>
												Share on <a href='#'>Facebook</a>
											</span>
										</p>
									</p>
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
