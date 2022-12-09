import mongoose, { Schema, model, connect } from 'mongoose';
import { IHobbie } from '../interfaces/IHobbie';


const hobbieSchema = new Schema<IHobbie>({
        name:     { type: String, required: true},
        image:     { type: String, required: true},
},
{
        timestamps: true
});

// 3. Create a Model.
export const Hobbie =  mongoose.models.Hobbie || model<IHobbie>('Hobbie', hobbieSchema)  ;

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(process.env.MONGO_CONNECTION || '');
}

export default Hobbie;