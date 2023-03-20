import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { Link } from 'react-scroll';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { FC } from 'react';

const Profile: FC = () => {
	const profile =
		'<header><h1>Hola! Soy <strong>Francisco Zelada</strong>.</h1></header><p><strong>Desarrollador Front-End</strong> enfocado en <strong>React</strong> y <strong>Next.JS.</strong> En mi portafolio podrás conocer algunos de mis proyectos, las tecnologías que utilizo, y más información sobre mi. ¡Gracias por visitar!</p>';

	const purificado = DOMPurify.sanitize(profile);

	return (
		<>
			<div className='container '>
				<div className='row'>
					<div className='col-4 col-5-large col-12-medium'>
						<span className='image fit fade-in-down'>
							<Image
								src={process.env.NEXT_PUBLIC_PROFILE_PIC || ''}
								alt=''
								layout='responsive'
								width={400}
								height={400}
								priority={true}
							/>
						</span>
					</div>
					<div className='col-8 col-7-large col-12-medium fade-in-left'>
						{
							<>
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
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								Tecnologías que utilizo
								<ArrowDropDownCircleOutlinedIcon
									style={{ marginLeft: 3 }}
									fontSize='large'
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
