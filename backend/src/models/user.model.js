import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    }
});

// eslint-disable-next-line func-names
userSchema.pre('save', function(next) {
    const user = this;
    if (user.isModified('password')) {
        // TODO hash password
        const hash = user.password;
        user.password = hash;
    }
    return next();
});

export default mongoose.model('User', userSchema);
