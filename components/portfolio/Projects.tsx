import { IProject } from '../../src/interfaces/IProject';
import Project from './Project';
import { FC } from 'react';
import ModalOpenLink from './ModalOpenLink';
import React from 'react';

interface Props {
	projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => {
	return (
		<>
			<div className='container'>
				<div
					className='row'
					style={{ display: 'flex', justifyContent: 'space-around' }}>
					{projects.map((project, i) => (
						<React.Fragment key={`${project.title}-${i}`}>
							<Project project={project} />
						</React.Fragment>
					))}
				</div>
				<ModalOpenLink />
			</div>
		</>
	);
};

export default Projects;
