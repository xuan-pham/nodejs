const usersDB = {
    users: require('../models/User'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');


//
const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ message: 'Username and Password ko dung' });
    const foundUser = usersDB.users.find(profile => profile.username === user);
    if (!foundUser) return res.status(401).json({ message: '' });
    const math = await bcrypt.compare(pwd, foundUser.password);
    if (math) {
        res.json({ "success": `user ${user} is logged in` });
    } else {
        res.sendStatus(401);
    }
}