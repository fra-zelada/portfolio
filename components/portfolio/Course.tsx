import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { Box, Card, CardMedia, Chip, Divider, Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LaunchIcon from '@mui/icons-material/Launch';
import { ICourse } from '../../src/interfaces/ICourse';

interface Props {
	course: ICourse;
}

const Course: FC<Props> = ({ course }) => {
	const { image, nameCourse, schoolName, year, website } = course;
	return (
		<Grid container style={{ padding: 5, height: '100%' }}>
			<Grid
				item
				xs={5}
				style={{
					marginRight: 2,
					alignItems: 'center',
					display: 'flex',
					justifyItems: 'center',
					justifyContent: 'center',
				}}>
				<Card sx={{ maxWidth: '180px' }}>
					<CardMedia
						component='img'
						image={image}
						alt={nameCourse}
						loading='lazy'
					/>
				</Card>
			</Grid>
			{/* <Grid item xs={2}> */}
			<Divider orientation='vertical' flexItem></Divider>
			{/* </Grid> */}
			<Grid
				item
				xs={6}
				style={{
					marginLeft: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box style={{ marginBottom: 0 }}>
					<ListItemText
						primary={`🎓 ${nameCourse}`}
						secondary={`🏫 ${schoolName}`}
					/>
				</Box>
				<Box
					style={{
						marginTop: 'auto',
						width: '150px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Typography variant='caption'>
						<CalendarMonthIcon fontSize='inherit' />
						{year}
					</Typography>

					{/* <br /> */}
					{website !== '' && (
						<Chip
							target='_blank'
							label={`Visitar`}
							icon={<LaunchIcon sx={{ fill: 'white' }} />}
							component='a'
							href={website}
							variant='outlined'
							clickable
							style={{
								marginTop: 'auto',
								width: '80%',
								color: 'white',
							}}
						/>
					)}
				</Box>
			</Grid>
		</Grid>
	);
};

export default Course;
