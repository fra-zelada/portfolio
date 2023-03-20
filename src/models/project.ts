import mongoose, { Schema, model, connect } from 'mongoose';
import { IProject, IProjectCredentials } from '../interfaces/IProject';

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.

const projectCredentials = new Schema<IProjectCredentials>({
        user:         { type: String },
        password:     { type: String },
        description:  { type: String },
        title:        { type: String }
})

const projectScrema = new Schema<IProject>({
    title   : { type: String, required: true },
    website : { type: String, required: true },
    image   : { type: String, required: true },
    gitHubRepo  : { type: String, required: true },
    description : { type: String, required: true },
    credentials : [{ type: projectCredentials }],
    priority: { type: Number },
},
{
    timestamps: true
});

// 3. Create a Model.
export const Project =  mongoose.models.Project || model<IProject>('Project', projectScrema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(process.env.MONGO_CONNECTION || '');



}

export default Project;