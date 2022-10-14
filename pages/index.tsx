import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout';
import vercel from '../public/images/pic01.jpg'
import Contact from '../components/portfolio/Contact';
import Links from '../components/portfolio/Links';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Profile from '../components/portfolio/Profile';
import ModalOpenLink from '../components/portfolio/ModalOpenLink';
import useSWR from 'swr';
import { useEffect } from 'react';
import { IProject } from '../src/interfaces/IProject';
import { useProject } from '../src/hooks/useProject';
import Project from '../src/models/project';
import { Skill } from '../src/models';
import { ISkill, ISoftSkill } from '../src/interfaces/ISkill';
import SoftSkill from '../src/models/softSkill';
import SkillsGrid from '../components/portfolio/SkillsGrid';

interface Props {
	projects: IProject[];
	skills: ISkill[];
	softSkills: ISoftSkill[];
}


const Home: NextPage<Props> = ({ projects , skills, softSkills }) => {

	


	return (
    
      <MainLayout> 
        <>
			
        
			<nav id="nav">
				<ul className="container">
					<li><a href="#top">Top</a></li>
					<li><a href="#work">Work</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>

		
			<article id="top" className="wrapper style1">
				<Profile/>
			</article>

		
			<article id="work" className="wrapper style2">
				<SkillsGrid skills={skills} softSkills={ softSkills }/>
			</article>
			<ModalOpenLink/>
			<div id="yourAppElement"></div>
			<article id="portfolio" className="wrapper style3">
				<Projects projects={ projects }/>
			</article>


			<article id="work" className="wrapper style2">
				<Skills skills={skills} softSkills={ softSkills }/>
			</article>
			<ModalOpenLink/>
			

		
			<article id="contact" className="wrapper style4">
				<div className="container medium">
					<header>
						<h2>Have me make stuff for you.</h2>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
					</header>
					<div className="row">
						
						{/* Contact */}
						<Contact/>

						<Links/>
					</div>
					<footer>
						<ul id="copyright">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
				</div>
			</article>


        </>

      </MainLayout>
    
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const projects = await Project.find().sort( 'priority' ); 
	const skills = await Skill.find().sort( 'priority' );
	const softskills = await SoftSkill.find()

	return {
		props: {
			projects : 	JSON.parse( JSON.stringify( projects )),
			skills : 	JSON.parse( JSON.stringify( skills )),
			softSkills : 	JSON.parse( JSON.stringify( softskills )),
		}
	}
}


export default Home
