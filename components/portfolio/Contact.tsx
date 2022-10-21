import { Snackbar, TextareaAutosize, TextField } from '@mui/material';
import { FormEvent, FC } from 'react';
import { useState } from 'react';
import { useSendEmail } from '../../src/hooks/useSendEmail';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { FormControlUnstyled } from '@mui/base';
interface IForm {
	name	:	string;
	email	:	string;
	subject	:	string;
	message	:	string;

}


const Contact:FC = () => {

	

	const INITIAL_STATE:IForm = 
		{
			name	:	'',
			email 	: 	'',
			subject	: 	'',
			message	: 	''
		}
		const [open, setOpen] = useState(false);
	
	
	const [formState, setFormState] = useState<IForm>(INITIAL_STATE)

	const { name, email, message, subject } = formState;

	const [ sendMail ] = useSendEmail();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		
		event?.preventDefault();
		sendMail(formState);
		setOpen(true);
		
	};

	const ContactSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		subject: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		message: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});

	
	const formik = useFormik({
			initialValues: INITIAL_STATE,
			validationSchema: ContactSchema,
			onSubmit: async (values) => {
				if (await sendMail(values))
				{
					setOpen(true);
					resetForm();
				}
				else
				{
					alert('Dont Sent!')
				}
			},
		});
		
	const { handleSubmit , resetForm} = formik;
		return (
			<>
			<div className="col-12">
				<form method="post" onSubmit={ handleSubmit }>
					<div className="row">
						<div className="col-6 col-12-small">
						<TextField 
								type="text" 
								name="name" 
								id="name" 
								fullWidth
								placeholder="Name" 
								value={formik.values.name}
								onChange={formik.handleChange}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
								// value={ email } 
								// onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

							/>
						</div>
						<div className="col-6 col-12-small">
							<TextField 
								type="text" 
								name="email" 
								id="email" 
								fullWidth
								placeholder="Email" 
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
								// value={ email } 
								// onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

							/>
						</div>
						<div className="col-12">
							<TextField 
								type="text" 
								name="subject" 
								id="subject" 
								fullWidth
								placeholder="Subject"  
								value={formik.values.subject}
								onChange={formik.handleChange}
								error={formik.touched.subject && Boolean(formik.errors.subject)}
								helperText={formik.touched.subject && formik.errors.subject}
								// value={ subject }
								// onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

							/>
						</div>
						<div className="col-12">
							<TextField
								rows={8}
								multiline
								fullWidth
								name="message" 
								label="Message"
								// variant="standard"
								// style={{ multilin }}
								id="message" 
								// placeholder="Message" 
								value={formik.values.message}
								onChange={formik.handleChange}								
								error={formik.touched.message && Boolean(formik.errors.message)}
								helperText={formik.touched.message && formik.errors.message}
								// value={ message }
								// onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}
								minRows={8}
							></TextField>
						
						</div>
						<div className="col-12">
							<ul className="actions">
								<li><input type="submit" value="Send Message" /></li>
								<li><input 
										type="reset" 
										value="Clear Form" 
										className="alt" 
										onClick={ () => resetForm }
									/></li>
							</ul>
						</div>
					</div>
				</form>
			</div>   

			<Snackbar
				message="Mensaje Enviado!"
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				autoHideDuration={2000}
				onClose={() => setOpen(false)}
				open={open}
			/>

</>
		);
	};

//     return (
//         <>
//                         <div className="col-12">
// 							<form method="post" onSubmit={ onSubmit }>
// 								<div className="row">
// 									<div className="col-6 col-12-small">
// 										<TextField 
// 											type="text" 
// 											name="name" 
// 											id="name" 
// 											fullWidth
// 											placeholder="Name"  
// 											value={ name }
// 											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}
// 										/>
// 									</div>
// 									<div className="col-6 col-12-small">
// 										<TextField 
// 											type="text" 
// 											name="email" 
// 											id="email" 
// 											fullWidth
// 											placeholder="Email" 
// 											value={ email } 
// 											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

// 										/>
// 									</div>
// 									<div className="col-12">
// 										<TextField 
// 											type="text" 
// 											name="subject" 
// 											id="subject" 
// 											fullWidth
// 											placeholder="Subject"  
// 											value={ subject }
// 											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}

// 										/>
// 									</div>
// 									<div className="col-12">
// 										<TextareaAutosize
// 											name="message" 
// 											id="message" 
// 											placeholder="Message" 
// 											value={ message }
// 											onChange={({target}) => { setFormState(prev => ({...prev, [target.name]: target.value})) }}
// 											minRows={8}
// 										></TextareaAutosize>
// 									</div>
// 									<div className="col-12">
// 										<ul className="actions">
// 											<li><input type="submit" value="Send Message" /></li>
// 											<li><input 
// 													type="reset" 
// 													value="Clear Form" 
// 													className="alt" 
// 													onClick={() => { setFormState(INITIAL_STATE) }}
// 												/></li>
// 										</ul>
// 									</div>
// 								</div>
// 							</form>
// 						</div>   

// 						<Snackbar
// 							message="Mensaje Enviado!"
// 							anchorOrigin={{ vertical: "top", horizontal: "center" }}
// 							autoHideDuration={2000}
// 							onClose={() => setOpen(false)}
// 							open={open}
// 						/>

//         </>
//     )
// }

export default Contact
