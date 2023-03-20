import { timeStamp } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../src/models/job';
import { IJob } from '../../../src/interfaces/IJob';

type Data = {
    name: string
} | {
    
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
                return getAllJobs( req, res );
            
        case 'POST':
                return createJob( req, res );
    
        default:
            break;
    }

    res.status(200).json({ name: 'Example' })
    
}

const createJob = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const newJob:IJob = req.body as IJob;
    
    
    const job = new Project(newJob)
    

    await job.save();
    
    return res.status(200).json({ job })
};

const getAllJobs = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const jobs = await Project.find().sort( 'order' );

    return res.status(200).json({ jobs })


};