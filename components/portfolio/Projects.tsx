import { IProject } from '../../src/interfaces/IProject';
import Project from './Project';
import { FC } from 'react';
import ModalOpenLink from './ModalOpenLink';

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
					{projects.map((project) => (
						<>
							<Project key={project.gitHubRepo} project={project} />
						</>
					))}
				</div>
				<ModalOpenLink />
			</div>
		</>
	);
};

export default Projects;
