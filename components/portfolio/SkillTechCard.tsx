import {
	Box,
	Card,
	CardMedia,
	Chip,
	Grid,
	IconButton,
	styled,
	Typography,
} from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import Radium from 'radium';
import { useState, FC } from 'react';
import { bounce } from 'react-animations';
import Rating from '@mui/material/Rating';
import { ISkill } from '../../src/interfaces/ISkill';
import Image from 'next/image';

interface Props {
	skill: ISkill;
}

const SkillTechCard: FC<Props> = ({ skill }) => {
	const { category, image, knowledge, name } = skill;
	const StyledRating = styled(Rating)({
		'& .MuiRating-iconFilled': {
			color: '#02BB02',
		},
		'& .MuiRating-iconHover': {
			color: '#06F406',
		},
	});

	const [animate, setAnimate] = useState(false);

	const onClickIcon = () => {
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 1000);
	};

	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				// minHeight: 60,
			}}>
			{/* <Box style={{ marginTop: '1px'}}>


                                            </Box> */}
			<Box
				style={{
					margin: 0,
				}}>
				<Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>

				<div className={animate ? 'flip' : ''}>
					<IconButton
						onClick={onClickIcon}
						color='primary'
						aria-label='upload picture'
						component='label'>
						<Card
							sx={{
								width: 65,
								height: 65,
								position: 'relative',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: 2,
								background: '#ffffff4d',
							}}>
							<Image src={image} alt={name} layout='fill' objectFit='contain' />

							{/* <CardMedia
								component='img'
								width='10px'
								image={image}
								alt={name}></CardMedia> */}
						</Card>
					</IconButton>
				</div>
			</Box>
			{/* <Box style={{ marginTop: 'auto' }}>
				<StyledRating
					name='customized-color'
					defaultValue={(knowledge * 5) / 100 || 0}
					getLabelText={(value: number) =>
						`${value} Heart${value !== 1 ? 's' : ''}`
					}
					precision={0.1}
					icon={<LensIcon fontSize='small' />}
					emptyIcon={<LensIcon fontSize='small' />}
					contentEditable={false}
					disabled={true}
					style={{ marginBottom: '0px' }}
				/>
				<Chip
					label={`Manejo: ${knowledge || 0}%`}
					size='small'
					sx={{ color: 'white', fontWeight: 'bold', background: '#210033' }}
				/>
			</Box> */}
		</Box>
	);
};

export default SkillTechCard;
