import mongoose, { Schema, model, connect } from 'mongoose';
import { ISoftSkill } from '../interfaces/ISkill';

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.



const softSkillSchema = new Schema<ISoftSkill>({
    title           : { type: String, required: true },
    description     : { type: String, required: true },
    image           : { type: String },
    
},
{
    timestamps: true
});

// 3. Create a Model.
export const SoftSkill =  mongoose.models.SoftSkill || model<ISoftSkill>('SoftSkill', softSkillSchema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/portfolio');



}

export default SoftSkill;