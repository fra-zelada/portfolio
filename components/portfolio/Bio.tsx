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
import AccordionHobbies from './AccordionHobbies';

import AccordionCustom from './AccordionCustom';
import JobDetails from './JobDetails';
import CoursesList from './CoursesList';
import HobbiesList from './HobbiesList';
import { IJob } from '../../src/interfaces/IJob';
import { ICourse } from '../../src/interfaces/ICourse';
import { IHobbie } from '../../src/interfaces/IHobbie';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

interface Props {
	jobs: IJob[];
	courses: ICourse[];
	hobbies: IHobbie[];
}

const Bio: FC<Props> = ({ jobs, courses, hobbies }) => {
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				// background: 'transparent',
			}}
			sx={{ width: { lg: '70%', md: '85%', xs: '95%' } }}
			className='swing-in-top-fwd'>
			<AccordionCustom
				title={'My Work Experience'}
				subtitle={'Places where I have worked and learned...'}
				icon={<WorkHistoryIcon style={{ color: '#248f24' }} />}>
				<JobDetails jobs={jobs} />
			</AccordionCustom>
			<AccordionCustom
				title={'Academic Education'}
				subtitle={'Courses and Professional Studies...'}
				icon={<MenuBookIcon style={{ color: '#0077b3' }} />}>
				<CoursesList courses={courses} />
			</AccordionCustom>
			<AccordionCustom
				title={'Hobbies'}
				subtitle={'Some of the things I like and find entertaining...'}
				image={
					'https://res.cloudinary.com/dwvkka6mz/image/upload/v1670874498/wwetitle_xdya2g.png'
				}
				icon={<ImageIcon />}>
				<HobbiesList hobbies={hobbies} />
			</AccordionCustom>
		</Box>
	);
};

export default Bio;
