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
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>

				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'></meta>
			</Head>
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
