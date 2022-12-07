import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

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
