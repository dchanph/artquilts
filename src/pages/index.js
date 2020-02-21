import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';
import '../styles/mystyle.scss';
// import View from '../components/View';
// import Status from '../components/Status';

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
							Art Quilt seeks to support women working in cottage industries. It
							micro-finances their businesses. It also provides them a work
							opportunity. in a safe environment to quilt, share knowledge and
							socialize.
							<Link to='/crafts'>Support us by buying a craft.</Link>
						</p>
						<br />
						<p>
							Art Quilts creates a sustainability eco-system by buying pre-loved
							fabric materials. The revenue earned funds educational initiatives
							within the community.
							<Link to='/donate'>Support us by donating a kit.</Link>
						</p>
						<br />
						<p>Every stitch creates an opportunity to enhance our community.</p>
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
			{/* <Status />
			<View title='Simple Authentication Example'>
				<p>
					This is a simple example of creating dynamic apps with Gatsby that
					require user authentication. It uses concepts from the
					{` `}
					<a href='https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/'>
						client-only routes section
					</a>
					{` `}
					of the “Building Apps with Gatsby” documentation.
				</p>
				<p>
					For the full experience, go to
					{` `}
					<Link to='/app/profile'>your profile</Link>.
				</p>
			</View> */}
		</Layout>
	);
};

export default IndexPage;
