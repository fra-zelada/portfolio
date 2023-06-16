import { Grid } from '@mui/material';
import { Link } from 'react-scroll';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

export const ProfileNavButtons = () => {
	return (
		<Grid container spacing={5} sx={{ marginTop: 4, marginLeft: 1 }}>
			<Grid xs={12} lg={6} sx={{ padding: { xs: 0, lg: 1 } }}>
				<Link
					className='custom-button'
					to='portfolio'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<span
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyItems: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}>
						<FolderOpenOutlinedIcon
							sx={{
								width: { xs: '32px', md: '55px' },
								height: { xs: '32px', md: '55px' },
								marginRight: 1,
							}}
						/>
						PROYECTOS
					</span>
				</Link>
			</Grid>
			<Grid xs={12} lg={6} sx={{ padding: { xs: 0, lg: 1 } }}>
				<Link
					className='custom-button'
					to='work'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<span className=''>
						<PsychologyOutlinedIcon
							sx={{
								width: { xs: '32px', md: '55px' },
								height: { xs: '32px', md: '55px' },
								marginRight: 1,
							}}
						/>
						TECNOLOGÍAS
					</span>
				</Link>
			</Grid>
			<Grid xs={12} lg={6} sx={{ padding: { xs: 0, lg: 1 } }}>
				<Link
					className='custom-button'
					to='bio'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<span className=''>
						<WorkHistoryOutlinedIcon
							sx={{
								width: { xs: '32px', md: '55px' },
								height: { xs: '32px', md: '55px' },
								marginRight: 1,
							}}
						/>
						EXPERIENCIA
					</span>
				</Link>
			</Grid>
			<Grid xs={12} lg={6} sx={{ padding: { xs: 0, lg: 1 } }}>
				<Link
					className='custom-button'
					to='contact'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<span className=''>
						<ContactMailIcon
							sx={{
								width: { xs: '32px', md: '55px' },
								height: { xs: '32px', md: '55px' },
								marginRight: 1,
							}}
						/>
						CONTACTO
					</span>
				</Link>
			</Grid>
		</Grid>
	);
};
