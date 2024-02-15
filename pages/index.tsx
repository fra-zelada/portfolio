import { Box, Typography } from '@mui/material';
import { ICourse } from '../src/interfaces/ICourse';
import { IHobbie } from '../src/interfaces/IHobbie';
import { IJob } from '../src/interfaces/IJob';
import { IProject } from '../src/interfaces/IProject';
import { ISkill, ISoftSkill } from '../src/interfaces/ISkill';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Skill } from '../src/models';
import { useState } from 'react';
import Bio from '../components/portfolio/Bio';
import BuildIcon from '@mui/icons-material/Build';
import Contact from '../components/portfolio/Contact';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Course from '../src/models/course';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import Hobbie from '../src/models/hobbies';
import Job from '../src/models/job';
import MainLayout from '../components/layouts/MainLayout';
import Profile from '../components/portfolio/Profile';
import Project from '../src/models/project';
import Projects from '../components/portfolio/Projects';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SchoolIcon from '@mui/icons-material/School';
import SectionBox from '../components/layouts/SectionBox';
import SkillsGrid from '../components/portfolio/SkillsGrid';
import SoftSkill from '../src/models/softSkill';
import TopNavMenuOption from '../components/ui/TopNavMenuOption';
import type { GetStaticProps, NextPage } from 'next';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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
	// const [screenPosition, setScreenPosition] = useState({ position: 'top' });

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
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<TopNavMenuOption
									name={'Home'}
									icon={
										<HomeOutlinedIcon sx={{ fontSize: { sx: 12, md: 35 } }} />
									}
								/>
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
								duration={500}>
								<TopNavMenuOption
									name={'Technologies'}
									icon={
										<PsychologyOutlinedIcon
											sx={{ fontSize: { sx: 12, md: 35 } }}
										/>
									}
								/>
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
								duration={500}>
								<TopNavMenuOption
									name={'Portfolio'}
									icon={
										<FolderOpenOutlinedIcon
											sx={{ fontSize: { sx: 12, md: 35 } }}
										/>
									}
								/>
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
								duration={500}>
								<TopNavMenuOption
									name={'Experience'}
									icon={
										<WorkHistoryOutlinedIcon
											sx={{ fontSize: { sx: 12, md: 35 } }}
										/>
									}
								/>
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
								duration={500}>
								<TopNavMenuOption
									name={'Contact'}
									icon={
										<ContactMailIcon sx={{ fontSize: { sx: 12, md: 35 } }} />
									}
								/>
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
						title={'Technologies'}
						subtitle={'Libraries, frameworks, and tools that I have used...'}
						nextSectionName={'portfolio'}
						nextSectionButtonLabel={'My Portfolio...'}
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
						title={'Portfolio'}
						subtitle={'Some example projects'}
						nextSectionName={'bio'}
						nextSectionButtonLabel={'Who I am...'}
						icon={<WorkIcon />}
						sectionName={'portfolio'}
						prevSectionName={'work'}
						prevSectionButtonLabel={'work'}
						backgroundImage='https://res.cloudinary.com/dwvkka6mz/image/upload/v1668013721/html/pexels-photo-4348401_jyxp1p.jpg'>
						<Projects projects={projects} />
					</SectionBox>
				</article>

				<article id='bio' className='wrapper style3 '>
					<SectionBox
						backgroundColor='#CFF1EF'
						title={'More about me'}
						subtitle={'My professional background and interests'}
						nextSectionName={'contact'}
						nextSectionButtonLabel={"Let's connect..."}
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

				<article id='contact' className='wrapper style4 '>
					<div className='container medium'>
						<header>
							<h2>Contact</h2>
							<p>Have questions? Let's chat...</p>
						</header>
						<div className='row'>
							{/* Contact */}
							<Contact />

							{/* <Links /> */}
						</div>

						<footer>
							<p className='footer_copyright'>
								Website created by &copy; Francisco Zelada
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
