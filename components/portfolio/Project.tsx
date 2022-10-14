import { FC } from "react";
import ReadMore from "./ReadMore";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import { showModal } from "../../src/slices/uiSlice";
import { loadModalData } from "../../src/slices/modalSlice";
import { PayloadAction } from '@reduxjs/toolkit';
import { IProject } from "../../src/interfaces/IProject";

interface Props {
    project: IProject;
    image: string;
}

const Project:FC<Props> = ({ project , image}) => {
    
    const { title, description, gitHubRepo, website, credentials, priority } = project;

    const dispatch = useAppDispatch();
    
    const openLink = () => {
            
        dispatch(loadModalData( { title, website,description, gitHubRepo,  credentials } ))
        dispatch( showModal() );
    
    };
    

    return (
        <>
            <div className="col-4 col-6-medium col-12-small">
							<article className="box style2" id={ title } >
								<a onClick={ openLink } className="image featured">
									<picture>
										<img src={ image } className="" alt=""  />
									</picture>
								</a>
                                

								<h3><a onClick={ openLink }>{ title }</a></h3>
								<p><ReadMore text={ description } /></p>
                                <div style={{ display: 'flex'}}>
                                    
                                    <a 
                                        onClick={ openLink }
                                        className=" button small"
                                        style={{  justifyContent:'flex-start' }}
                                    >
                                            Visitar <LaunchIcon/>
                                    </a>
                                        

                                    <a href={ gitHubRepo } className=" button small" target="_blank"
                                        rel='noreferrer' style={{  marginLeft: 'auto', justifyContent:'flex-end'}}>
                                        Código <GitHubIcon/>
                                    </a>
                                        
                                </div>
							</article>
			</div>   
        </>
    )
}

export default Project
