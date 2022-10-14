import mongoose, { Schema, model, connect } from 'mongoose';
import { ISkill } from '../interfaces/ISkill';

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.



const skillSchema = new Schema<ISkill>({
    name   : { type: String, required: true },
    image : { type: String, required: true },
    category  : { type: String, required: true },
    priority: { type: Number },
},
{
    timestamps: true
});

// 3. Create a Model.
export const Skill =  mongoose.models.Skill || model<ISkill>('Skill', skillSchema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/portfolio');



}

export default Skill;