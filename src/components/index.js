import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header';

// Global styles and component-specific styles.
import './global.scss';
import styles from './main.module.scss';

const Layout = ({ children }) => (
	<div>
		<Helmet title='Simple Authentication With Gatsby' />
		<Header />
		<main className={styles.main}>{children}</main>
	</div>
);

export default Layout;
