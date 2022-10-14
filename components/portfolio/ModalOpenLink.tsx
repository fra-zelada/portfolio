import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IProject } from '../../src/interfaces/IProject';
import { cleanModalData } from '../../src/slices/modalSlice';
import { hideModal, showModal } from '../../src/slices/uiSlice';

import { useAppSelector, useAppDispatch } from '../../src/store/hooks';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const ModalOpenLink = () => {

    const stateModal = useAppSelector( (state) => state.ui.isModalVisible );
    const modalData  = useAppSelector( (state) => state.modal.modalData ) as IProject;
    const { title ='', website='', credentials = [] }  = modalData || {};

    const dispatch = useAppDispatch();   
    

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        };

    Modal.setAppElement('#yourAppElement');

    let subtitle = '';
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        dispatch( showModal() );
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    }

    function closeModal() {
        dispatch( cleanModalData() );
        dispatch( hideModal() );
    }

    useEffect(() => {
        
        setIsOpen( stateModal );

    }, [ stateModal ])

    useEffect(() => {
        if( modalIsOpen )
            document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [modalIsOpen])

    return (

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ customStyles }
        contentLabel="Example Modal"
    >
        <h2>{title}</h2>
        <a 
                                        href={ website }
                                        target="_blank"
                                        rel='noreferrer'
                                        className=" button "
                                        style={{  justifyContent:'flex-start' }}
                                    >
                                            Visitar <LaunchIcon/>
                                    </a>
            <div>

            {
                credentials.map(({title, user, password, description }) => (
                    <>
                    <h4> { title } </h4>  <div> {description} </div>
                    <input key={ user } type="text" readOnly value={ user } /> 
                    <button className='button small'>
                        <ContentCopyOutlinedIcon />
                    </button>
                    <input key={ user } type="text" readOnly value={ password } /> 
                    <button className='button small'>
                        <ContentCopyOutlinedIcon />
                    </button>

                    </>
                ))
            }
            </div>
        <button onClick={closeModal}>close</button>
    </Modal>
    
    )
}

export default ModalOpenLink


