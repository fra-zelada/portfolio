import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import {
	Avatar,
	Box,
	Divider,
	ListItem,
	ListItemAvatar,
	Typography,
} from '@mui/material';
import { FC } from 'react';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CoPresentIcon from '@mui/icons-material/CoPresent';

interface Props {
	title: string;
	description: string;
	image?: string;
}

const Skill: FC<Props> = ({ title, description, image = '' }) => {
	return (
		<>
			<Box
				sx={{
					background: '#fff',
					boxShadow:
						'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1)',
					padding: 1,
				}}
				className='skillContainer'>
				<section className='skillContainer'>
					<ListItem
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<ListItemAvatar>
							<Avatar>
								<CoPresentIcon />
							</Avatar>
						</ListItemAvatar>
						<Typography variant='h4'> {title} </Typography>
					</ListItem>
					<Divider />
					<Typography
						variant='body2'
						color='text.secondary'
						style={{ marginTop: '25px' }}>
						{description}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: 80, md: 120 },
						}}>
						<LaptopMacOutlinedIcon fontSize='inherit' />
					</Typography>
				</section>
			</Box>
		</>
	);
};

export default Skill;
