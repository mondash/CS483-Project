import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true, 
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('Note', NoteSchema);