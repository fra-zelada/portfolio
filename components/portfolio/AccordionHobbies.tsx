import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	Grid,
	ImageListItem,
	ImageListItemBar,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccordionHeader from './AccordionHeader';

const AccordionHobbies = () => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<AccordionHeader title={'Hobbies'} subtitle={''} />
			</AccordionSummary>
			<AccordionDetails>
				<Chip
					avatar={
						<Avatar
							alt='WWE'
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYob-e1K2DSr8Gg28BDK2Ie9Nd53XxuEd5EVhbsN_G5YL0oWYLG6On0F8pOHYSxxOT-Ao&usqp=CAU'
						/>
					}
					label='Lucha Libre'
					variant='outlined'
				/>
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionHobbies;
