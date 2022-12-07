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

	useEffect(() => {
		const data = async () => {
			setloadingWeb(true);
			const data = await fetch(website);
			setloadingWeb(false);
		};

		void data();
	}, []);

	return (
		<>
			<div className='col-4 col-6-medium col-12-small' ref={divRef}>
				<article className='box style2' id={title}>
					<Card sx={{ maxWidth: 345, minHeight: 360, position: 'relative' }}>
						<CardMedia
							component='img'
							alt='green iguana'
							height='140'
							image={image}
						/>
						<CardContent>
							<Box
								sx={{
									marginBottom: 5,
								}}>
								<Typography gutterBottom variant='h5' component='div'>
									{title}
								</Typography>
								<ReadMore text={description} divRef={divRef} />
							</Box>
						</CardContent>
						<Box sx={{ bottom: 0, marginTop: 10, position: 'absolute' }}>
							<CardActions>
								{(credentials?.length ?? 0) > 0 ? (
									<Chip
										label={`Visitar`}
										icon={<LaunchIcon />}
										component='a'
										onClick={openLink}
										variant='outlined'
										clickable
									/>
								) : (
									<Chip
										label={`Visitar`}
										icon={<LaunchIcon />}
										component='a'
										href={website}
										target='_blank'
										variant='outlined'
										clickable
									/>
								)}

								<Chip
									label='Github'
									icon={<GitHubIcon />}
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
			</div>
		</>
	);
};

export default Project;
