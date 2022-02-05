const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    profile: {
        fullname: {
            type: 'string',
            trim: true,
            required: true,
        },
        address: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'string',
            unique: true,
            lowercase: true,
            trim: true,
            required: true,
        },
        phone: {
            type: 'string',
            required: true,
        }
        ,
        status: {
            type: 'string',
            required: true,
        },
        gender: {
            type: 'string',
            required: true,
        }
        ,
        avatar: {
            type: 'string',
            required: true,
        },
        username: {
            type: 'string',
            required: true,
        },
        hash_password: {
            type: 'string',
            required: true,
        }
    },
    followers: {
        user_id: {
            fullname: {
                type: 'string',

            },
            avatar: {
                type: 'string',

            }
        }

    }

}, { timestamps: true });
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('Users', UserSchema);