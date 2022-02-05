const User = require('../models/User');
class UserController {
    async index(req, res) {
        try {
            const dataUser = await User.find().lean();
            res.status(200).json(dataUser);
        }
        catch (err) {
            console.error(err);
        }
    }

    async store(req, res) {
        try {
            const user = await new User({
                profile: {
                    fullname: res.body.fullname,
                    address: res.body.address,
                    email: res.body.email,
                    phone: res.body.phone,
                    status: res.body.status,
                    gender: res.body.gender,
                    avatar: res.body.avatar,
                    username: res.body.username,
                    password: res.body.password,
                }
            });
            await user.save();
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports = new UserController();