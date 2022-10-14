import { FormEvent, FC } from 'react';
import { useState } from 'react';

interface IForm {
	name	:	string;
	email	:	string;
	subject	:	string;
	message	:	string;

}


const Contact:FC = () => {

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
			
		event?.preventDefault();
		console.log(formState)
	};

	const INITIAL_STATE:IForm = 
		{
			name	:	'',
			email 	: 	'',
			subject	: 	'',
			message	: 	''
		}
	
	
	const [formState, setFormState] = useState<IForm>(INITIAL_STATE)

	const { name, email, message, subject } = formState;

    return (
        <>
                        <div className="col-12">
							<form method="post" onSubmit={ onSubmit }>
								<div className="row">
									<div className="col-6 col-12-small">
										<input 
											type="text" 
											name="name" 
											id="name" 
											placeholder="Name"  
											value={ name }
											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}
										/>
									</div>
									<div className="col-6 col-12-small">
										<input 
											type="text" 
											name="email" 
											id="email" 
											placeholder="Email" 
											value={ email } 
											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

										/>
									</div>
									<div className="col-12">
										<input 
											type="text" 
											name="subject" 
											id="subject" 
											placeholder="Subject"  
											value={ subject }
											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

										/>
									</div>
									<div className="col-12">
										<textarea 
											name="message" 
											id="message" 
											placeholder="Message" 
											value={ message }
											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

										></textarea>
									</div>
									<div className="col-12">
										<ul className="actions">
											<li><input type="submit" value="Send Message" /></li>
											<li><input 
													type="reset" 
													value="Clear Form" 
													className="alt" 
													onClick={() => { setFormState(INITIAL_STATE) }}
												/></li>
										</ul>
									</div>
								</div>
							</form>
						</div>   
        </>
    )
}

export default Contact
