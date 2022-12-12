import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { Link } from 'react-scroll';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { FC } from 'react';
import Particles from 'react-tsparticles';
import { Box } from '@mui/material';

const Profile: FC = () => {
	const profile =
		'<header><h1>Hola! Soy <strong>Francisco Zelada</strong>.</h1></header><p>Y este es mi <strong>Portafolio</strong>. Soy un desarrollador Front-End con un enfoque en <strong>React</strong> y <strong>Next.JS</strong>. <br/> Apenas estoy comenzando en este viaje y quiero seguir aprendiendo.</p>';

	const purificado = DOMPurify.sanitize(profile);
	const purificado2 = DOMPurify.sanitize(profile);

	return (
		<>
			<div className='container '>
				<div className='row'>
					<div className='col-4 col-5-large col-12-medium'>
						<span className='image fit fade-in-down'>
							<Image
								src='/images/pic09.jpg'
								alt=''
								layout='responsive'
								width={400}
								height={400}
							/>
						</span>
					</div>
					<div className='col-8 col-7-large col-12-medium fade-in-left'>
						{
							<>
								{/* <header>
	<h1>Hola! Soy <strong>Francisco Zelada</strong>.</h1>
</header>
<p>Y este es mi <strong>Portafolio</strong>. Soy un desarrollador front-end con un enfoque en <strong>React</strong> y <strong>Next.JS</strong>.
<br/>
Apenas estoy comenzando en este viaje y quiero seguir aprendiendo.</p> */}
								<div dangerouslySetInnerHTML={{ __html: purificado }}></div>
							</>
						}
						<Link
							to='work'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className='button large scrolly fade-in-down'>
							Tecnologías que utilizo
							<ArrowDropDownCircleOutlinedIcon fontSize='large' />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
