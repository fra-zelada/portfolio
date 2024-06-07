import { FC, useRef, useEffect, useState } from 'react';
import ReadMore from './ReadMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useAppDispatch } from '../../src/store/hooks';
import { showModal } from '../../src/slices/uiSlice';
import { loadModalData } from '../../src/slices/modalSlice';
import { IProject } from '../../src/interfaces/IProject';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	CircularProgress,
	Typography,
} from '@mui/material';

interface Props {
	project: IProject;
}

const Project: FC<Props> = ({ project }) => {
	const { title, description, gitHubRepo, website, credentials, image } =
		project;

	const dispatch = useAppDispatch();

	const [loadingWeb, setloadingWeb] = useState(false);

	const divRef = useRef<HTMLDivElement>(null);
	const openLink = () => {
		dispatch(
			loadModalData({ title, website, description, gitHubRepo, credentials })
		);
		dispatch(showModal());
	};

	// useEffect(() => {
	// 	const data = async () => {
	// 		setloadingWeb(true);
	// 		try {
	// 			const data = await fetch(website);
	// 		} catch (error) {}
	// 		setloadingWeb(false);
	// 	};

	// 	void data();
	// }, []);

	return (
		<Box
			// className='col-4 col-6-medium col-12-small'
			style={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				borderTopLeftRadius: '10px',
				borderTopRightRadius: '10px',
				marginBottom: '5px',
			}}
			sx={{
				maxWidth: { xs: '100%', md: '50%', lg: '33%' },
				padding: { md: '2px', lg: '4px' },
			}}
			className='swing-in-top-fwd-projects'
			ref={divRef}>
			<article
				className='box '
				id={title}
				style={{
					display: 'flex',
					alignItems: 'stretch',
					borderTopLeftRadius: '10px',
					borderTopRightRadius: '10px',
					justifyContent: 'center',
					flexGrow: 1,
				}}>
				<Card
					style={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
					}}
					sx={{
						// maxWidth: { xs: '100%', md: '33%' },
						position: 'relative',
						background: '#0000004d',
						color: 'white',
					}}>
					<CardMedia
						component='img'
						alt={title}
						image={image}
						loading='lazy'
						style={{
							aspectRatio: '16/12',
							objectFit: 'contain',
							borderTopLeftRadius: '10px',
							borderTopRightRadius: '10px',
						}}
					/>

					<CardContent>
						<Box
							sx={{
								marginBottom: 5,
								color: 'white',
							}}>
							<Typography
								gutterBottom
								// variant='h5'
								component='div'
								color={'white'}
								style={{
									fontWeight: 'bold',
									fontSize: '28px',
									textTransform: 'uppercase',
								}}>
								{title}
							</Typography>
							<ReadMore text={description} divRef={divRef} />
						</Box>
					</CardContent>
					<Box sx={{ bottom: 0, marginTop: 10, position: 'absolute' }}>
						<CardActions>
							{(credentials?.length ?? 0) > 0 ? (
								<Chip
									label={`Live Demo`}
									sx={{
										color: 'white',
										bgcolor: 'blueviolet',
										border: '2px solid blueviolet',
										fontWeight: 'bolder',
										fontSize: '16px',
										paddingX: '6px',
									}}
									icon={<LaunchIcon sx={{ fill: 'white' }} />}
									component='a'
									onClick={openLink}
									variant='outlined'
									clickable
								/>
							) : (
								<Chip
									label={`Live Demo`}
									sx={{
										color: 'white',
										bgcolor: 'blueviolet',
										border: '2px solid blueviolet',

										fontWeight: 'bolder',
										fontSize: '16px',
										paddingX: '6px',
									}}
									icon={<LaunchIcon sx={{ fill: 'white' }} />}
									component='a'
									href={website}
									target='_blank'
									variant='outlined'
									clickable
								/>
							)}

							<Chip
								label='Github'
								sx={{
									color: 'white',
									fontWeight: 'bolder',
									fontSize: '16px',
									paddingX: '6px',
								}}
								icon={<GitHubIcon sx={{ fill: 'white' }} />}
								component='a'
								href={gitHubRepo}
								target='_blank'
								variant='outlined'
								clickable
							/>
							{loadingWeb && <CircularProgress />}
						</CardActions>
					</Box>
				</Card>
			</article>
		</Box>
	);
};

export default Project;
