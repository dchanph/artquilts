import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';
import '../styles/mystyle.scss';

const IndexPage = () => {
	return (
		<Layout>
			<section class='hero is-primary'>
				<div class='hero-body'>
					<div class='container'>
						<h1 class='title'>Primary title</h1>
						<h2 class='subtitle'>Primary subtitle</h2>
					</div>
				</div>
			</section>
			<br />
			<br />
			<div class='tile is-ancestor'>
				<div class='tile is-4 is-vertical is-parent'>
					<div class='tile is-child box'>
						<article class='tile is-child notification is-danger bold'>
							<p class='title'>Meet our Quilter</p>
							<figure class='image is-128x128'>
								<img
									class='is-rounded'
									src='https://bulma.io/images/placeholders/128x128.png'
								></img>
							</figure>
							<br />
							<div class='media-content'>
								<p class='title is-4'>Gen Lim</p>
								<p class='subtitle is-6'>@genlim</p>
							</div>
							<br />
							<div class='content'>
								<p>
									I love quilting animal huggies. Each artfully crafted, each
									with an element of surprize. Bringing cheers to its owner!
								</p>
							</div>
						</article>
					</div>
				</div>
				<div class='tile is-parent'>
					<div class='tile is-child box'>
						<p class='title'>Art Quilt: the social enterprise </p>
						<p>
							Art Quilt seeks to build a self-funding community through
							businesses by women. It provides a safe environment to quilt,
							share knowledge and socialize.
						</p>
						<br />
						<p>
							All patchworks used are pre-loved fabric materials. The fund
							earned pays for the work by the quilter and micro-finance their
							businesses. It also funds educational initiatives within the
							community.
						</p>
						<br />
						<p>
							We stitch your wish while improving our community.
							<Link to='/contact'>
								Support us by buying a craft or donating a kit.
							</Link>
						</p>
						<br />
						<p>
							Have a moment? Watch the video on a similar quest by Mekong+ on
							empowering through quilting. Enjoy!
						</p>
						<br />
						<p class='subtitle is-6'>Jane Song, founder</p>
						<footer class='card-footer'>
							<p class='card-footer-item'>
								<span>
									View on{' '}
									<a href='https://twitter.com/codinghorror/status/506010907021828096'>
										Twitter
									</a>
								</span>
							</p>
							<p class='card-footer-item'>
								<span>
									Share on <a href='#'>Facebook</a>
								</span>
							</p>
						</footer>
					</div>
				</div>
			</div>
			<br />
			<figure class='image is-16by9'>
				<iframe
					class='has-ratio'
					width='640'
					height='360'
					src='https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0'
					// src='https://www.youtube.com/watch?v=WZewlusNg64'
					frameborder='0'
					allowfullscreen
				></iframe>
			</figure>
			<br />
		</Layout>
	);
};

export default IndexPage;
