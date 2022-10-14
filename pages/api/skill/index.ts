import { timeStamp } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Skill } from '../../../src/models';
import { ISkill } from '../../../src/interfaces/ISkill';

type Data = {
    name: string
} | {
    
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
                return getAllSkills( req, res );
            break;
        case 'POST':
                return createSkill( req, res );
            break;
    
        default:
            break;
    }

    res.status(200).json({ name: 'Example' })
    
}

const createSkill = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const newSkill:ISkill = req.body as ISkill;
    
    
    const skill = new Skill(newSkill)
    

    await skill.save();
    
    return res.status(200).json({ skill })
};

const getAllSkills = async ( req: NextApiRequest , res: NextApiResponse<Data>) => {
        
    const skills = await Skill.find().sort( 'priority' );

    return res.status(200).json({ skills })


};