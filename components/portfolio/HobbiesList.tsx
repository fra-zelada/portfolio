import { Avatar, Box, Chip, Grid } from '@mui/material';
import { FC } from 'react';
import { IHobbie } from '../../src/interfaces/IHobbie';

interface Props {
	hobbies: IHobbie[];
}

const HobbiesList: FC<Props> = ({ hobbies }) => {
	return (
		<Box style={{ color: 'white' }} paddingLeft={'20%'} paddingRight={'20%'}>
			{hobbies.map(({ image, name }) => (
				<Chip
					key={name}
					avatar={<Avatar alt={name} src={image} />}
					label={name}
					variant='outlined'
					style={{ margin: 1, color: 'white' }}
				/>
			))}
		</Box>
	);
};

export default HobbiesList;
