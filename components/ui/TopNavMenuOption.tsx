import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
	name: string;
	icon?: JSX.Element;
}

const TopNavMenuOption: FC<Props> = ({ name, icon }) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: { xs: 'column', md: 'row-reverse' },
			justifyContent: 'center',
			alignItems: 'center',
			minWidth: 45,
		}}>
		<Typography
			sx={{
				marginLeft: { xs: 0, md: 1 },
				fontSize: { xs: 10, md: 20 },
				fontWeight: 'bold',
			}}>
			{name}
		</Typography>
		{icon}
	</Box>
);

export default TopNavMenuOption;
