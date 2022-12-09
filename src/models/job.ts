import mongoose, { Schema, model, connect } from 'mongoose';
import { IJob, IJobDetails } from '../interfaces/IJob';

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.

const jobDetails = new Schema<IJobDetails>({
        order:         { type: String },
        description:     { type: String },
})

const jobSchema = new Schema<IJob>({
    company   : { type: String, required: true },
    position : { type: String, required: true },
    companyImg   : { type: String, required: true },
    years  : { type: String, required: true },
    details : [{ type: jobDetails }],
    order: { type: Number }
},
{
    timestamps: true
});

// 3. Create a Model.
export const Job =  mongoose.models.Job || model<IJob>('Job', jobSchema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(process.env.MONGO_CONNECTION || '');



}

export default Job;