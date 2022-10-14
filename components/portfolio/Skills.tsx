import { ISkill, ISoftSkill } from '../../src/interfaces/ISkill';
import Skill from './Skill';
import { FC } from 'react';
import SkillTech from './SkillTech';

interface Props {
	skills: ISkill[];
	softSkills: ISoftSkill[];
}


const Skills:FC<Props> = ({ skills, softSkills }) => {
	
	const frontSkills = skills.filter( ({category}) => ( category=='frontend' ))
	const othersSkills = skills.filter( ({category}) => ( category=='others' ))

    return (
        <>
				<div className="container">
					<header>
						<h2>Heres all the stuff I do.</h2>
						<p>Odio turpis amet sed consequat eget posuere consequat.</p>
					</header>
					<div className="row aln-center">
						<SkillTech skills={frontSkills} title={'Front Techs'}/>
						<Skill title={ softSkills[0].title || '' } description={ softSkills[0].description || ''}/>
						<SkillTech skills={othersSkills} title={'Other Skills...'}/>
						<SkillTech skills={othersSkills} title={'Other Skills...'}/>
						<SkillTech skills={othersSkills} title={'Other Skills...'}/>
						<SkillTech skills={othersSkills} title={'Other Skills...'}/>
						
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
						<a href="#portfolio" className="button large scrolly">See some of my recent work</a>
					</footer>
				</div>               
        </>
    )
}

export default Skills
