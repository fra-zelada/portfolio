import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
