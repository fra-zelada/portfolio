import { timeStamp } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ISoftSkill } from '../../../../src/interfaces/ISkill';
import {SoftSkill} from '../../../../src/models/softSkill';


type Data = {
    name: string
} | {
    
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
                return getAllSoftSkills( req, res );
        case 'POST':
                return createSoftSkill( req, res );
    
        default:
            break;
    }

    res.status(200).json({ name: 'Example' })
    
}

const createSoftSkill = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const newSoftSkill:ISoftSkill = req.body as ISoftSkill;
    
    
    const skill = new SoftSkill(newSoftSkill)
    

    await skill.save();
    
    return res.status(200).json({ skill })
};

const getAllSoftSkills = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const skills = await SoftSkill.find();

    return res.status(200).json({ skills })


};