import { Box, Grid } from '@mui/material';
import { ProfileSkillItem } from './ProfileSkillItem';

export const ProfileSkillsContainer = () => {
	return (
		<Grid
			xs={8}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{/* React Card */}

			<ProfileSkillItem
				img={
					'https://res.cloudinary.com/dwvkka6mz/image/upload/v1667418362/icons/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail_fyuxk5.png'
				}
			/>
			{/* NExt js card */}

			<ProfileSkillItem
				img={
					'https://res.cloudinary.com/dwvkka6mz/image/upload/v1667418361/icons/next-js-logo-8FCFF51DD2-seeklogo.com-removebg-preview_qikixv.png'
				}
			/>
			{/* Typescript card */}

			<ProfileSkillItem
				img={
					'https://res.cloudinary.com/dwvkka6mz/image/upload/v1667418362/icons/Typescript_logo_2020.svg_iaz2qe.png'
				}
			/>
			<Box
				sx={{
					display: { xs: 'none', lg: 'flex' },
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				{/* Mongo card */}

				<ProfileSkillItem
					img={
						'https://res.cloudinary.com/dwvkka6mz/image/upload/v1667418361/icons/MongoDB-Emblem-removebg-preview_t2oqyo.png'
					}
				/>

				{/* Oracle card */}

				<ProfileSkillItem
					img={
						'https://res.cloudinary.com/dwvkka6mz/image/upload/v1671209044/icons/oracle-removebg-preview_eagjfe.png'
					}
				/>
			</Box>
		</Grid>
	);
};
