    import { timeStamp } from 'console';
    import type { NextApiRequest, NextApiResponse } from 'next'
    import Project from '../../../src/models/project';
    import { IProject } from '../../../src/interfaces/IProject';

    type Data = {
        name: string
    } | {
        
    }

    export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

        switch (req.method) {
            case 'GET':
                    return getAllProjects( req, res );
            case 'POST':
                    return createProject( req, res );
        
            default:
                break;
        }

        res.status(200).json({ name: 'Example' })
        
    }

    const createProject = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
            
        const newProject:IProject = req.body as IProject;
        
        
        const project = new Project(newProject)
        

        await project.save();
        
        return res.status(200).json({ project })
    };

    const getAllProjects = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
            
        const projects = await Project.find().sort( 'priority' );

        return res.status(200).json({ projects })
        

    };