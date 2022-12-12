import { useEffect, useState, FC } from 'react';
import { IProject } from '../../src/interfaces/IProject';
import { cleanModalData } from '../../src/slices/modalSlice';
import { hideModal, showModal } from '../../src/slices/uiSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

import { useAppSelector, useAppDispatch } from '../../src/store/hooks';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import {
	Accordion,
	AccordionSummary,
	Backdrop,
	Box,
	Button,
	capitalize,
	Grid,
	IconButton,
	Modal,
	Snackbar,
	SxProps,
	TextField,
	Theme,
	Typography,
} from '@mui/material';
import React from 'react';

const ModalOpenLink: FC = () => {
	const stateModal = useAppSelector((state) => state.ui.isModalVisible);
	const modalData = useAppSelector(
		(state) => state.modal.modalData
	) as IProject;
	const { title = '', website = '', credentials = [] } = modalData || {};
	const [open, setOpen] = useState(false);

	const dispatch = useAppDispatch();

	const style: SxProps<Theme> = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: { xs: '90%', md: 'auto' },
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	// Modal.setAppElement('#yourAppElement');

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		dispatch(showModal());
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		dispatch(hideModal());
		dispatch(cleanModalData());
	}

	useEffect(() => {
		setIsOpen(stateModal);
	}, [stateModal]);

	return (
		<Modal
			open={modalIsOpen}
			onClose={closeModal}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
			// isOpen={modalIsOpen}
			// onAfterOpen={afterOpenModal}
			// onRequestClose={closeModal}
			// style={ customStyles }
			// contentLabel="Example Modal"
		>
			<Box sx={style}>
				<div>{title}</div>

				<div>
					{credentials.map(({ title, user, password, description }, i) => (
						<React.Fragment key={`${title}-${i}`}>
							<div>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel2a-content'
										id='panel2a-header'>
										<Typography>{capitalize(title)}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Grid container spacing={2}>
											<Grid
												item
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}>
												<Box
													style={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
													}}>
													<TextField
														required
														id='outlined-required'
														label='Usuario'
														value={user}
														InputProps={{
															readOnly: true,
														}}
														size='small'
														onClick={() => {
															navigator.clipboard.writeText(user);
															setOpen(true);
														}}
													/>
													<IconButton
														sx={{ display: { xs: 'none', md: 'block' } }}>
														<ContentCopyOutlinedIcon
															color='action'
															onClick={() => {
																navigator.clipboard.writeText(user);
																setOpen(true);
															}}
														/>
													</IconButton>
												</Box>
											</Grid>
											<Grid item style={{ display: 'flex' }}>
												<Box style={{ display: 'flex' }}>
													<TextField
														required
														id='outlined-required'
														label='Password'
														value={password}
														InputProps={{
															readOnly: true,
														}}
														size='small'
														onClick={() => {
															navigator.clipboard.writeText(password);
															setOpen(true);
														}}
													/>
													<IconButton
														sx={{ display: { xs: 'none', md: 'block' } }}>
														<ContentCopyOutlinedIcon
															color='action'
															onClick={() => {
																navigator.clipboard.writeText(password);
																setOpen(true);
															}}
														/>
													</IconButton>
												</Box>
											</Grid>
											<Snackbar
												message='Copiado al Portapapeles'
												anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
												autoHideDuration={2000}
												onClose={() => setOpen(false)}
												open={open}
											/>
										</Grid>
									</AccordionDetails>
								</Accordion>
							</div>
						</React.Fragment>
					))}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '5px',
					}}>
					<Button
						fullWidth
						href={website}
						target='_blank'
						variant='contained'
						style={{ margin: 1 }}>
						Visitar <LaunchIcon />
					</Button>
					<Button
						fullWidth
						onClick={closeModal}
						variant='contained'
						style={{ margin: 1 }}>
						Cerrar
					</Button>
					{/* <a 
                                        href={ website }
                                        target="_blank"
                                        rel='noreferrer'
                                        className=" button "
                                        style={{  width: '40%' , justifyContent:'flex-start', marginLeft: '10px'}}    
                                    >
                                            Visitar <LaunchIcon/>
                                    </a>
                                    <a 
                                        onClick={ closeModal }
                                        target="_blank"
                                        rel='noreferrer'
                                        className=" button "
                                        style={{  width: '40%' , justifyContent:'flex-end', marginRight: '10px'}}    
                                        >
                                            Close 
                                    </a> */}
				</div>
			</Box>
		</Modal>
	);
};

export default ModalOpenLink;
