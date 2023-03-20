import mongoose, { Schema, model, connect } from 'mongoose';
import { ICourse } from '../interfaces/ICourse';

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.



const courseSchema = new Schema<ICourse>({
        nameCourse:     { type: String, required: true},
        schoolName:     { type: String, required: true},
        year:           { type: String, required: true},
        image:          { type: String, required: true},
        website:        { type: String, required: true},
        order:          { type: Number, required: true},
},
{
    timestamps: true
});

// 3. Create a Model.
export const Course =  mongoose.models.Course || model<ICourse>('Course', courseSchema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(process.env.MONGO_CONNECTION || '');



}

export default Course;