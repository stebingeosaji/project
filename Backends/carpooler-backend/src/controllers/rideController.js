const Ride = require('../models/rideModel');
const User = require('../models/userModel');

exports.offerRide = async (req, res) => {
    const { from, to, date, time, seats, genderPreference } = req.body;

    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure gender preference is only set by female users
        if (genderPreference && user.gender !== 'female') {
            return res.status(403).json({ message: 'Only female users can set gender preference' });
        }

        const ride = await Ride.create({
            user: req.user._id,
            from,
            to,
            date,
            time,
            seats,
            genderPreference: user.gender === 'female' ? genderPreference : 'any', // Set gender preference if user is female
        });

        res.status(201).json({ ride, gender: user.gender });
    } catch (error) {
        console.error('Error offering ride:', error);
        res.status(500).json({ message: 'Server error' });
    }
};