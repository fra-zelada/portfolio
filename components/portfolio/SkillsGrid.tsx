import { ISkill, ISoftSkill } from '../../src/interfaces/ISkill';
import Skill from './Skill';
import { FC } from 'react';
import SkillTech2 from './SkillTech2';
import { Box } from '@mui/material';

interface Props {
	skills: ISkill[];
	softSkills: ISoftSkill[];
}

const SkillsGrid: FC<Props> = ({ skills, softSkills }) => {
	const frontSkills = skills.filter(({ category }) => category === 'frontend');
	const othersSkills = skills.filter(({ category }) => category === 'others');

	return (
		<>
			<div className='container'>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: 'repeat(1, 1fr)',
							sm: 'repeat(2, 1fr)',
							md: 'repeat(3, 1fr)',
						},

						gridTemplateRows: 'auto',
						gap: 1,
						gridTemplateAreas: {
							xs: `"centro "
														"izquierda"
														"derecha"`,
							sm: `"centro centro"
														"izquierda derecha"
														"izquierda derecha"`,
							md: `". centro ."
														"izquierda centro derecha"
														"izquierda . derecha"`,
						},
					}}>
					<Box
						sx={{
							gridArea: 'centro',
						}}>
						<Skill
							title={softSkills[0].title}
							description={softSkills[0].description}
						/>
					</Box>
					<Box
						sx={{
							gridArea: 'izquierda',
							maxWidth: { xs: '100%', sm: '100%', md: '400px' },
						}}>
						<SkillTech2 skills={frontSkills} title={'Tech Stack'} />
					</Box>
					<Box
						sx={{
							gridArea: 'derecha',
							maxWidth: { xs: '100%', sm: '100%', md: '400px' },
						}}>
						<SkillTech2 skills={othersSkills} title={'Tools'} />
					</Box>
				</Box>
			</div>
		</>
	);
};

export default SkillsGrid;
