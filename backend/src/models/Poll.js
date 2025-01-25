import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    votes: { type: Number, default: 0 },
});

const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: { type: [optionSchema], validate: [arrayLimit, 'Polls must have 2-7 options.'] },
    createdAt: { type: Date, default: Date.now },
});

function arrayLimit(val) {
    return val.length >= 2 && val.length <= 7;
}

export default mongoose.model('Poll', pollSchema);
