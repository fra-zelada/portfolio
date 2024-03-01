import { FC } from 'react';

interface Props {
	img: string;
}

export const ProfileSkillItem: FC<Props> = ({ img }) => {
	return (
		<picture
			style={{
				maxHeight: 65,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginBottom: 2,
				marginLeft: 10,
				background: 'transparent',
				objectFit: 'contain',
			}}>
			<img
				style={{
					maxHeight: '65px',
					maxWidth: '65px',
					filter: 'drop-shadow(0 0.2rem 0.25rem rgba(150, 150, 150, 1))',
				}}
				height={'65px'}
				width={'65px'}
				src={img}
				alt='skill'
			/>
		</picture>
	);
};
