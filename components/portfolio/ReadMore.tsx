import { Typography } from '@mui/material';
import { fadeIn } from 'react-animations';
import Radium from 'radium';

import React, {
	FC,
	PropsWithChildren,
	useEffect,
	useRef,
	useState,
} from 'react';

interface Props {
	text: string;
	divRef: React.RefObject<HTMLDivElement>;
}

const ReadMore: FC<Props> = ({ text, divRef }) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		if (!isReadMore) {
			window.scrollTo({
				top: (divRef.current?.offsetTop || 0) - 95,
				left: 0,
				behavior: 'smooth',
			});

			// divRef.current?.scrollIntoView (  {behavior:"smooth"});
		}
		setIsReadMore(!isReadMore);
	};

	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 1000);
	}, [isReadMore]);

	return (
		<div className={animate ? 'fade-in' : ''}>
			<Typography
				variant='body2'
				color='white'
				style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.5em' }}>
				{isReadMore ? text.slice(0, 750) : text}
				{text.length > 750 && (
					<a onClick={toggleReadMore} className='clickable'>
						{isReadMore ? '...leer más' : ' ...colapsar'}
					</a>
				)}
			</Typography>
		</div>
	);
};

export default ReadMore;
