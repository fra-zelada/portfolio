import { Grid } from '@mui/material';
import { FC } from 'react';
import { ICourse } from '../../src/interfaces/ICourse';
import Course from './Course';

interface Props {
	courses: ICourse[];
}

const CoursesList: FC<Props> = ({ courses }) => {
	return (
		<Grid container>
			{courses.map((course, i) => (
				<Grid
					item
					xs={12}
					md={4}
					key={i}
					style={{ border: 'solid 1px lightgray' }}
					alignContent='stretch'>
					<Course course={course} key={i} />
				</Grid>
			))}
		</Grid>
	);
};

export default CoursesList;
