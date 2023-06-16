import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { Link } from 'react-scroll';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card } from '@mui/material';
import { ProfileSkillItem } from './ProfileSkillItem';

const Profile: FC = () => {
	const profile = process.env.NEXT_PUBLIC_PROFILE_MESSAGE || '';

	const purificado = DOMPurify.sanitize(profile);

	return (
		<>
			<div className='container '>
				<div className='row'>
					<div className='col-4 col-5-large col-12-medium'>
						<span className='image fit fade-in-down'>
							<Image
								src={process.env.NEXT_PUBLIC_PROFILE_PIC || ''}
								alt=''
								layout='responsive'
								width={500}
								height={500}
								priority={true}
							/>
						</span>
					</div>
					<div className='col-8 col-7-large col-12-medium fade-in-left'>
						{
							<>
								{/* <div dangerouslySetInnerHTML={{ __html: purificado }}> */}
								<div>
									<Box sx={{ marginBottom: 2, fontSize: '60px' }}>
										<strong>Francisco Zelada</strong>
									</Box>
									<Grid container>
										<Grid xs={4}>
											<Box sx={{ marginBottom: 0, fontSize: '25px' }}>
												<strong>Front-End Developer</strong>
											</Box>
											<Box sx={{ marginBottom: 1, fontSize: '15px' }}>
												<strong>🎓Ingeniero en informática</strong>
											</Box>
										</Grid>
										<Grid
											xs={8}
											sx={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'left',
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
													visibility: { xs: 'hidden', md: 'visible' },
													display: 'flex',
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
									</Grid>
								</div>
								{/* </div> */}
							</>
						}
						<Grid container spacing={2} sx={{ marginTop: 4 }}>
							<Grid xs={12} lg={6}>
								<Link
									className='custom-button'
									to='portfolio'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}>
									<span className=''>PROYECTOS</span>
								</Link>
							</Grid>
							<Grid xs={12} lg={6}>
								<Link
									className='custom-button'
									to='work'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}>
									<span className=''>TECNOLOGÍAS</span>
								</Link>
							</Grid>
							<Grid xs={12} lg={6}>
								<Link
									className='custom-button'
									to='bio'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}>
									<span className=''>EXPERIENCIA</span>
								</Link>
							</Grid>
							<Grid xs={12} lg={6}>
								<Link
									className='custom-button'
									to='contact'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}>
									<span className=''>CONTACTO</span>
								</Link>
							</Grid>
						</Grid>

						{/* <Link
							to='work'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className='custom-button'>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								Tecnologías que utilizo
								<ArrowDropDownCircleOutlinedIcon
									style={{ marginLeft: 3 }}
									fontSize='large'
								/>
							</div>
						</Link> */}
						{/* <Link
							to='work'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className='button large scrolly fade-in-down'>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								Tecnologías que utilizo
								<ArrowDropDownCircleOutlinedIcon
									style={{ marginLeft: 3 }}
									fontSize='large'
								/>
							</div>
						</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
