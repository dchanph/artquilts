import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import "./header.module.scss"
import headerStyles from './header.module.scss';

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header className={headerStyles.header}>
			<div
				style={{
					display: 'flex',
					flex: '1',
					justifyContent: 'space-between',
					borderBottom: '1px solid #d1c1e0'
				}}
			></div>
			<span>You are not logged in</span>
			<h1>
				<Link className={headerStyles.title} to='/'>
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to='/'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to='/crafts'
						>
							My Crafts
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to='/donate'
						>
							Donate a Kit
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to='/contact'
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to='/app/profile'
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
