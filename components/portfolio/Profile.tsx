import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { Link } from 'react-scroll';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card, Typography } from '@mui/material';
import { ProfileSkillItem } from './ProfileSkillItem';
import { ProfileGithubButton } from './ProfileGithubButton';
import { ProfileSkillsContainer } from './ProfileSkillsContainer';
import { ProfileNavButtons } from './ProfileNavButtons';

const Profile: FC = () => {
	const profile = process.env.NEXT_PUBLIC_PROFILE_MESSAGE || '';

	const purificado = DOMPurify.sanitize(profile);

	return (
		<>
			<div className='container '>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', lg: 'row' },
						justifyContent: 'center',
						alignItems: 'center',
						gap: 9,
					}}
					className=''>
					<Box
						sx={{
							display: { xs: 'none', lg: 'flex' },
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 5,
						}}>
						<span className='image fit fade-in-down '>
							<Image
								src={process.env.NEXT_PUBLIC_PROFILE_PIC || ''}
								alt=''
								layout='responsive'
								width={500}
								height={500}
								priority={true}
							/>
						</span>
						<ProfileGithubButton />
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { xs: 'center', lg: 'flex-start' },
						}}>
						<Box>
							<Box
								sx={{
									marginBottom: 0,
									fontSize: { xs: '30px', md: '45px', whiteSpace: 'nowrap' },
									textAlign: { xs: 'center', md: 'left' },
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-start',
									alignItems: 'center',
								}}>
								<Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
									<picture>
										<img
											src={process.env.NEXT_PUBLIC_PROFILE_PIC}
											alt='profile'
											width={'100px'}
											height={'100px'}
										/>
									</picture>
								</Box>
								<Typography sx={{ fontWeight: 'bold', marginLeft: 0 }}>
									Francisco Zelada
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: { xs: 'column', md: 'row' },
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: -2,
								}}>
								<Box>
									<Box
										sx={{
											marginBottom: 0,
											fontSize: {
												xs: '15px',
												whiteSpace: 'nowrap',
											},
										}}>
										<Typography sx={{ fontWeight: 'bold' }}>
											Front-End Developer
										</Typography>
									</Box>
									<Box
										sx={{
											marginBottom: 0,
											fontSize: {
												xs: '10px',
												whiteSpace: 'nowrap',
											},
										}}>
										<Typography sx={{ fontWeight: 'bold', paddingBottom: 1 }}>
											🎓Ingeniero en informática
										</Typography>
									</Box>
								</Box>
								{/* Profile Skills */}
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: 1,
									}}
									className='fade-in-down'>
									<ProfileSkillsContainer />
								</Box>
							</Box>
						</Box>
						{/* Profile Nav Buttons */}
						<Box
							sx={{
								maxWidth: { xs: '338px', lg: '100%' },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								padding: { xs: 1, lg: 2 },
								marginTop: -1,
							}}>
							<ProfileNavButtons />
						</Box>
					</Box>
				</Box>
			</div>
		</>
	);
};

export default Profile;
