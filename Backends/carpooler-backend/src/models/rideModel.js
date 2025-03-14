const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    genderPreference: {
        type: String,
        enum: ['male', 'female', 'any'],
        default: 'any',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;