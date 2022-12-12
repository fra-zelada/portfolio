import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { Box, Card, CardMedia, Divider, Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IJob } from '../../src/interfaces/IJob';
import React from 'react';

interface Props {
	jobs: IJob[];
}

const JobDetails: FC<Props> = ({ jobs }) => {
	return (
		<>
			<Grid container style={{ textAlign: 'left' }}>
				{jobs.map(({ company, companyImg, position, years, details }) => (
					<React.Fragment key={`${company}-${position}-${years}`}>
						<Grid item xs={5} md={4} style={{ marginRight: 2, marginLeft: 5 }}>
							<Card sx={{ maxWidth: '180px' }}>
								<CardMedia
									component='img'
									height='100%'
									image={companyImg}
									alt={company}
								/>
							</Card>
							<ListItemText
								primary={`💼 ${company}`}
								secondary={`💻 ${position}`}
							/>
							<Typography variant='caption'>
								<CalendarMonthIcon fontSize='inherit' />
								{years}
							</Typography>
						</Grid>
						{/* <Grid item xs={2}> */}
						<Divider orientation='vertical' flexItem></Divider>
						{/* </Grid> */}
						<Grid item xs={6} md={7} style={{ marginLeft: 10 }}>
							{details?.map(({ description }, i) => (
								<li key={i}>{description}</li>
							))}
						</Grid>
						<Grid item xs={12}>
							<Divider style={{ marginBottom: 10, marginTop: 10 }} />
						</Grid>
					</React.Fragment>
				))}
			</Grid>
		</>
	);
};

export default JobDetails;
