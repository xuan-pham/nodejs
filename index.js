const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
dotenv.config();

//require('Routes')
const userRouter = require('./routes/users');

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log('connect mongodb');
});

// app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "/public")));

//route
app.use("/api", userRouter);

//localhost
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});