import type { GetStaticProps, NextPage } from 'next';

import MainLayout from '../components/layouts/MainLayout';
import Contact from '../components/portfolio/Contact';
import Projects from '../components/portfolio/Projects';
import Profile from '../components/portfolio/Profile';
import { useState } from 'react';
import { IProject } from '../src/interfaces/IProject';
import Project from '../src/models/project';
import { Skill } from '../src/models';
import { ISkill, ISoftSkill } from '../src/interfaces/ISkill';
import SoftSkill from '../src/models/softSkill';
import SkillsGrid from '../components/portfolio/SkillsGrid';
import { Link, animateScroll as scroll } from 'react-scroll';
import Bio from '../components/portfolio/Bio';
import Job from '../src/models/job';
// import { Fab, Button } from '@mui/material';
// import NavigationIcon from '@mui/icons-material/Navigation';
import { IJob } from '../src/interfaces/IJob';
import Course from '../src/models/course';
import { ICourse } from '../src/interfaces/ICourse';
import Hobbie from '../src/models/hobbies';
import { IHobbie } from '../src/interfaces/IHobbie';
import { Box, Typography } from '@mui/material';
import SectionBox from '../components/layouts/SectionBox';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Skills from '../components/portfolio/Skills';

interface Props {
	projects: IProject[];
	skills: ISkill[];
	softSkills: ISoftSkill[];
	jobs: IJob[];
	courses: ICourse[];
	hobbies: IHobbie[];
}

const Home: NextPage<Props> = ({
	projects,
	skills,
	softSkills,
	jobs,
	courses,
	hobbies,
}: Props) => {
	const [screenPosition, setScreenPosition] = useState({ position: 'top' });

	// useEffect(() => {
	// 	console.log(screenPosition);
	// }, [screenPosition]);

	return (
		<MainLayout>
			<>
				<nav id='nav'>
					<ul
					// className='container'
					>
						<li>
							<Link
								className='clickable'
								activeClass='active'
								to='top'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onSetActive={(event) => {
								// 	setScreenPosition({ position: event });
								// }}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									// border: 'solid 1px white',
								}}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minWidth: 45,
									}}>
									<Typography sx={{ margin: 0, fontSize: 10 }}>
										Inicio
									</Typography>
									<ContactMailIcon fontSize='small' />
								</Box>
							</Link>
						</li>
						<li>
							<Link
								className='clickable'
								activeClass='active'
								to='work'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onSetActive={(event) => {
								// 	setScreenPosition({ position: event });
								// }}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minWidth: 45,
									}}>
									<Typography sx={{ margin: 0, fontSize: 10 }}>
										Skills
									</Typography>
									<ContactMailIcon fontSize='small' />
								</Box>
							</Link>
						</li>
						<li>
							<Link
								className='clickable'
								activeClass='active'
								to='portfolio'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onSetActive={(event) => {
								// 	setScreenPosition({ position: event });
								// }}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minWidth: 45,
									}}>
									<Typography sx={{ margin: 0, fontSize: 10 }}>
										Portafolio
									</Typography>
									<ContactMailIcon fontSize='small' />
								</Box>
							</Link>
						</li>
						<li>
							<Link
								className='clickable'
								activeClass='active'
								to='bio'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onSetActive={(event) => {
								// 	setScreenPosition({ position: event });
								// }}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									// border: 'solid 1px white',
								}}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minWidth: 45,
									}}>
									<Typography sx={{ margin: 0, fontSize: 10 }}>
										Perfil
									</Typography>
									<ContactMailIcon fontSize='small' />
								</Box>
							</Link>
						</li>
						<li>
							<Link
								className='clickable'
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onSetActive={(event) => {
								// 	setScreenPosition({ position: event });
								// }}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									// border: 'solid 1px white',
								}}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										minWidth: 45,
									}}>
									<Typography sx={{ margin: 0, fontSize: 10 }}>
										Contacto
									</Typography>
									<ContactMailIcon fontSize='small' />
								</Box>
								{/* <Box>
									<Box sx={{ display: { xs: 'none', mobile: 'block' } }}>
										Contact
									</Box>
									<Box
										sx={{
											visibility: 'hidden',
											display: { xs: 'block', mobile: 'none' },
										}}>
										‎
									</Box>

									<Typography
										sx={{
											display: { xs: 'flex', mobile: 'none' },
											alignItems: 'center',
											justifyContent: 'center',
											// border: 'solid 1px white',
										}}
										variant='inherit'>
										<ContactMailIcon fontSize='large' />
									</Typography>
									<Box
										sx={{
											visibility: 'hidden',
											display: { xs: 'block', mobile: 'none' },
										}}>
										‎
									</Box>
								</Box> */}
							</Link>
						</li>
					</ul>
				</nav>

				<article id='top' className='wrapper style1 topProfile'>
					<Profile />
				</article>

				<article id='work' className='wrapper style3'>
					<SectionBox
						backgroundColor='#CFF1EF'
						title={'Tecnologías'}
						subtitle={
							'Librerías, frameworks y herramientas que he utilizado...'
						}
						nextSectionName={'portfolio'}
						nextSectionButtonLabel={'Mi Portafolio...'}
						icon={<BuildIcon />}
						sectionName={'work'}
						prevSectionName={'top'}
						prevSectionButtonLabel={'Inicio'}
						backgroundImage='https://res.cloudinary.com/dwvkka6mz/image/upload/v1668012947/html/denis-pavlovic-wl5AypUmamo-unsplash_hwj8l4.jpg'>
						<SkillsGrid skills={skills} softSkills={softSkills} />
					</SectionBox>
				</article>
				<article id='portfolio' className='wrapper style3'>
					<SectionBox
						backgroundColor='#FBCFFC'
						title={'Portafolio'}
						subtitle={'Algunos proyectos de ejemplo'}
						nextSectionName={'bio'}
						nextSectionButtonLabel={'Quien soy...'}
						icon={<WorkIcon />}
						sectionName={'portfolio'}
						prevSectionName={'work'}
						prevSectionButtonLabel={'work'}
						backgroundImage='https://res.cloudinary.com/dwvkka6mz/image/upload/v1668013721/html/pexels-photo-4348401_jyxp1p.jpg'>
						<Projects projects={projects} />
					</SectionBox>
				</article>

				<article id='bio' className='wrapper style3'>
					<SectionBox
						backgroundColor='#CFF1EF'
						title={'Más sobre mi'}
						subtitle={'Mi historial profesional e intereses'}
						nextSectionName={'contact'}
						nextSectionButtonLabel={'Contectémonos...'}
						icon={<SchoolIcon />}
						sectionName={'bio'}
						prevSectionName={'portfolio'}
						prevSectionButtonLabel={'portfolio'}
						backgroundImage='https://res.cloudinary.com/dwvkka6mz/image/upload/v1668013721/html/pexels-oleksandr-pidvalnyi-2836955_jwexuy.jpg'>
						<Box
							style={{
								marginTop: '4em',
								// alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								// border: 'solid 1px black',
							}}>
							<Bio jobs={jobs} courses={courses} hobbies={hobbies} />
						</Box>
					</SectionBox>
				</article>

				{/* 
			<article id="work" className="wrapper style2">
				<Skills skills={skills} softSkills={ softSkills }/>
			</article> */}

				<article id='contact' className='wrapper style4'>
					<div className='container medium'>
						<header>
							<h2>Contacto</h2>
							<p>¿Consultas? Conversemos...</p>
						</header>
						<div className='row'>
							{/* Contact */}
							<Contact />

							{/* <Links /> */}
						</div>

						<footer>
							<p className='footer_copyright'>
								Sitio web creado por &copy; Francisco Zelada
							</p>
						</footer>
					</div>
				</article>
			</>
		</MainLayout>
	);
};
// You should use getStaticProps when:
// - The data required to render the page is available at build time ahead of a user’s request.
// - The data comes from a headless CMS.
// - The data can be publicly cached (not user-specific).
// - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const projects = await Project.find().sort('priority');
	const skills = await Skill.find().sort({
		priority: 'asc',
		knowledge: 'desc',
	});
	const softskills = await SoftSkill.find();
	const jobs = await Job.find().sort('order');
	const courses = await Course.find().sort('order');
	const hobbies = await Hobbie.find();

	return {
		props: {
			hobbies: JSON.parse(JSON.stringify(hobbies)),
			courses: JSON.parse(JSON.stringify(courses)),
			jobs: JSON.parse(JSON.stringify(jobs)),
			projects: JSON.parse(JSON.stringify(projects)),
			skills: JSON.parse(JSON.stringify(skills)),
			softSkills: JSON.parse(JSON.stringify(softskills)),
		},
		revalidate: 86400,
	};
};

export default Home;
