import { ISkill, ISoftSkill } from '../../src/interfaces/ISkill';
import Skill from './Skill';
import { FC } from 'react';
import SkillTech from './SkillTech';
import SkillTech2 from './SkillTech2';
import { Box, Card } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";

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
					<Box
						  sx={{
							display: 'grid',
							gridTemplateColumns: {	xs:'repeat(1, 1fr)',
													sm:'repeat(2, 1fr)',
													md:'repeat(3, 1fr)'
												},
							// gridTemplateRows: 'repeat(3, 1fr)',
							gridTemplateRows: 'auto',
							gap: 1,
							gridTemplateAreas: { xs: 	`"centro "
														"izquierda"
														"derecha"` ,
												sm: 	`"centro centro"
														"izquierda derecha"
														"izquierda derecha"` ,
												md: 	`". centro ."
														"izquierda centro derecha"
														"izquierda . derecha"` ,
													},
							
						  }}

					>

						<Box
							sx={{
								gridArea:'centro'
							}}
						>
							<Skill title={ softSkills[0].title || '' } description={ softSkills[0].description || ''}/>
                        </Box>
						<Box
							sx={{
								gridArea:'izquierda'
							}}
						>
                            <SkillTech2 skills={frontSkills} title={'Front Techs'}/>
						</Box>
						<Box
							sx={{
								gridArea:'derecha'
							}}
						>
                            <SkillTech2 skills={othersSkills} title={'Other Skills...'}/>
                        </Box>
					</Box>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
						<a href="#portfolio" className="button large scrolly">See some of my recent work</a>
					</footer>
				</div>               
        </>
    )
}

export default SkillsGrid
