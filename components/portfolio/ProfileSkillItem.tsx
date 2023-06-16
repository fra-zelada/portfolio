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
				style={{ maxHeight: '65px', maxWidth: '65px' }}
				src={img}
				alt='skill'
			/>
		</picture>
	);
};
