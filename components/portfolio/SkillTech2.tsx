import { FC } from 'react';
import { ISkill } from '../../src/interfaces/ISkill';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import {
	Avatar,
	Divider,
	ListItem,
	ListItemAvatar,
	Typography,
} from '@mui/material';
import Radium from 'radium';
import SkillTechCard from './SkillTechCard';

interface Props {
	title: string;
	skills: ISkill[];
}
// {border: 'solid 1px black', display:'flex', flexDirection:'column', width: '120px', height:'120px', margin: '0 0 0 0' }
// {
//     display: 'flex',
//     flexDirection:'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin:  '0 auto',
//     border: 'solid 1px black',
//     width: '100%',
//     height:'100%',
//     aspectRatio: '1/1'
//   }
const SkillTech2: FC<Props> = ({ skills, title }) => {
	const { StyleRoot } = Radium;

	return (
		<>
			<Box
				sx={{
					background: '#fff',
					boxShadow:
						'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1)',
					padding: 1,
					wordWrap: 'break-word',
				}}
				className='skill_card'>
				<section className='skillContainer'>
					<ListItem
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							wordWrap: 'break-word',
						}}>
						<ListItemAvatar>
							<Avatar sx={{ background: 'black' }}>
								<TerminalOutlinedIcon sx={{ background: 'black' }} />
							</Avatar>
						</ListItemAvatar>
						<Typography
							align='center'
							variant='h4'
							sx={{
								wordWrap: 'break-word',
								maxWidth: {
									xs: '300px',
									sm: '180px',
									lg: '300px',
									xl: '300px',
								},
							}}>
							{' '}
							{title}{' '}
						</Typography>
					</ListItem>
					<Divider />

					{/* <h3>{ title }</h3> */}
					<Box sx={{ flexGrow: 1, marginTop: 2, padding: 1 }}>
						<Grid container spacing={1} alignContent={''}>
							{skills.map((skill) => (
								<Grid
									xs={3}
									sm={4}
									lg={3}
									className='skillBox'
									// minWidth={'134px'}
									// maxWidth={'154px'}
									// alignContent={'stretch'}
									style={{
										// border: 'solid 1px lightgray',
										gap: 1,
										display: 'flex',
										flexDirection: 'column',
										aspectRatio: '1/1',
										alignItems: 'center',
										justifyContent: 'space-between',

										// , width: '130px', height:'130px'
									}}
									key={skill.name}>
									<SkillTechCard skill={skill} key={skill.name} />
								</Grid>
							))}
						</Grid>
					</Box>
				</section>
			</Box>
		</>
	);
};

export default SkillTech2;
