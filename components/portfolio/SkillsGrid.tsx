import { ISkill, ISoftSkill } from '../../src/interfaces/ISkill';
import Skill from './Skill';
import { FC } from 'react';
import SkillTech from './SkillTech';
import SkillTech2 from './SkillTech2';

interface Props {
	skills: ISkill[];
	softSkills: ISoftSkill[];
}


const SkillsGrid:FC<Props> = ({ skills, softSkills }) => {
	
	const frontSkills = skills.filter( ({category}) => ( category=='frontend' ))
	const othersSkills = skills.filter( ({category}) => ( category=='others' ))

    return (
        <>
				<div className="container">
					<header>
						<h2>Heres all the stuff I do.</h2>
						<p>Odio turpis amet sed consequat eget posuere consequat.</p>
					</header>
					<div className="card__container">
                        <div className="card__item">
                        <Skill title={ softSkills[0].title || '' } description={ softSkills[0].description || ''}/>
                        </div>
                        <div className="card__item">
                            <SkillTech2 skills={frontSkills} title={'Front Techs'}/>
                        </div>
						
                        <div className="card__item">
                            <SkillTech2 skills={othersSkills} title={'Other Skills...'}/>
                        </div>
                        

						
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
						<a href="#portfolio" className="button large scrolly">See some of my recent work</a>
					</footer>
				</div>               
        </>
    )
}

export default SkillsGrid
