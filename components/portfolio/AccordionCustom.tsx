import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FC, PropsWithChildren } from 'react';

interface Props {
	title: string;
	subtitle: string;
	image?: string;
	icon?: JSX.Element;
}

const AccordionCustom: FC<PropsWithChildren<Props>> = ({
	title,
	subtitle,
	icon,
	children,
	image = '',
}) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'>
				<ListItem>
					<ListItemAvatar>
						{image.length > 0 ? (
							<Avatar alt={title} src={`${image}`} />
						) : (
							<Avatar>{icon}</Avatar>
						)}
					</ListItemAvatar>
					<ListItemText primary={title} secondary={subtitle} />
				</ListItem>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};

export default AccordionCustom;
