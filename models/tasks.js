import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Task = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('tasks', Task);
