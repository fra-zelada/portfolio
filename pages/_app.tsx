import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../assets/sass/main.scss';
import '../assets/sass/gridlayouts.scss';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { SWRConfig } from 'swr';
import { CssBaseline } from '@mui/material';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<SWRConfig
			value={{
				fetcher: async (resource, init) =>
					await fetch(resource, init).then(async (res) => await res.json()),
			}}>
			<CssBaseline />
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Particles
						id='tsparticles'
						init={particlesInit}
						loaded={particlesLoaded}
						options={{
							fullScreen: {
								enable: true,
								zIndex: -1,
							},
							particles: {
								number: {
									value: 80,
									density: {
										enable: true,
										value_area: 800,
									},
								},
								color: {
									value: '#ff0000',
								},
								shape: {
									type: 'circle',
								},
								opacity: {
									value: 0.5,
									random: true,
									anim: {
										enable: true,
										speed: 3,
										opacity_min: 0.1,
										sync: false,
									},
								},
								size: {
									value: 5,
									random: true,
									anim: {
										enable: true,
										speed: 20,
										size_min: 0.1,
										sync: false,
									},
								},
								line_linked: {
									enable: true,
									distance: 150,
									color: '#ffffff',
									opacity: 0.4,
									width: 1,
								},
								move: {
									enable: true,
									speed: 2,
									direction: 'none',
									random: false,
									straight: false,
									out_mode: 'out',
									attract: {
										enable: false,
										rotateX: 600,
										rotateY: 1200,
									},
								},
								twinkle: {
									particles: {
										enable: true,
										color: '#ffff00',
										frequency: 0.05,
										opacity: 1,
									},
									lines: {
										enable: true,
										color: '#ff0000',
										frequency: 0.005,
										opacity: 1,
									},
								},
							},
							interactivity: {
								events: {
									onhover: {
										enable: true,
										mode: 'repulse',
									},
									onclick: {
										enable: true,
										mode: 'push',
									},
									resize: true,
								},
								modes: {
									grab: {
										distance: 400,
										line_linked: {
											opacity: 1,
										},
									},
									bubble: {
										distance: 400,
										size: 40,
										duration: 2,
										opacity: 0.8,
										speed: 3,
									},
									repulse: {
										distance: 200,
									},
									push: {
										particles_nb: 4,
									},
									remove: {
										particles_nb: 2,
									},
								},
							},
							retina_detect: true,
							background: {
								color: '#0d47a1',
								image: '',
								position: '50% 50%',
								repeat: 'no-repeat',
								size: 'cover',
							},
						}}
					/>
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</SWRConfig>
	);
}

export default MyApp;
