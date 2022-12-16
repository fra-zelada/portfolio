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
				minHeight: 145,
				// border: 'solid 1px black',
				// height: '100%',
				// alignItems: 'center',
			}}>
			{/* <Box style={{ marginTop: '1px'}}>


                                            </Box> */}
			<Box
				style={{
					margin: 0,
				}}>
				<Typography>{name}</Typography>

				<div className={animate ? 'flip' : ''}>
					<IconButton
						onClick={onClickIcon}
						color='primary'
						aria-label='upload picture'
						component='label'>
						<Card
							sx={{
								width: 40,
								height: 40,
								position: 'relative',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: 2,
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
			<Box
				style={{ marginTop: 'auto' }}
				// style={{
				// 	marginBottom: '1px',
				// 	display: 'flex',
				// 	flexDirection: 'column',
				// 	alignItems: 'flex-end',
				// }}
			>
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
				<Chip label={`Manejo: ${knowledge || 0}%`} size='small' />
				{/* <Typography component="legend" variant="caption" style={{marginTop: '0px'}}>Conocimiento: { knowledge || 0 }%</Typography> */}
			</Box>
		</Box>
	);
};

export default SkillTechCard;
