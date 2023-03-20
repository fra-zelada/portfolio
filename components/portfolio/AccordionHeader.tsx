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

interface Props {
	title: string;
	subtitle?: string;
	icon?: string;
}

const AccordionHeader: FC<Props> = ({ title, subtitle }) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<ImageIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={title} secondary={subtitle} />
		</ListItem>
	);
};

export default AccordionHeader;
