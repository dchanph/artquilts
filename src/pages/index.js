import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';
import '../styles/mystyle.scss';

const IndexPage = () => {
	return (
		<Layout>
			<section class='hero'>
				<figure class='image'>
					<img src='/navquilt.jpg'></img>
				</figure>
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
									src='http://www.radfaces.com/images/avatars/linda-barret.jpg'
									alt='linda barret avatar'
								></img>
							</figure>
							<br />
							<div class='media-content'>
								<p class='title is-4'>Gen Lim</p>
								<p class='subtitle is-6'>@genlim</p>
							</div>
							<br />
							<div class='content is-5'>
								<p>
									I love quilting animal huggies. Each artfully crafted, each
									with an element of surprize!
								</p>
							</div>
						</article>
					</div>
				</div>
				<div class='tile is-parent'>
					<div class='tile is-child box'>
						<p class='title'>Art Quilt: the social enterprise </p>
						<p>
							Art Quilt supports cottage quilting businesses by providing a web
							platform to showcase and sell quilters' artworks.
						</p>

						<p>
							<Link to='/crafts'> Support us by buying a craft.</Link>
						</p>
						<br />
						<p>
							All products are made from pre-loved fabric materials supplied by
							the community. This supports our belief that bettering a community
							starts from the home.
							<Link to='/donate'> Support us by donating a kit.</Link>
						</p>
						<br />
						<p>
							Have a moment? Watch on Mekong+ empowers through quilting. Enjoy!
							Special thanks to Pexels, Pixabay and Pininterest for the pics
							used in this website.
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
					src='https://www.youtube.com/embed/WZewlusNg64'
					frameborder='0'
					allowfullscreen
				></iframe>
			</figure>
			<br />
		</Layout>
	);
};

export default IndexPage;
