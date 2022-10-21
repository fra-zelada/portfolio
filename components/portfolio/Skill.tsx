import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import { FC } from 'react';

interface Props {
	title		:	string;
	description	:	string;
	image?		:	string;
}

const Skill:FC<Props> = ({ title, description, image=''}) => {
    return (
        <>
                        <div className="col-4 col-6-medium col-12-small">
							<section 
								className="box style1" 
								// style={{ height: '100%'}}
							>
								
								<h3>{ title }</h3>
								<p> { description } </p>
								<p style={{ fontSize: '120px'}}>

									<LaptopMacOutlinedIcon fontSize='inherit' />
								</p>
							</section>
						</div>            
        </>
    )
}

export default Skill
