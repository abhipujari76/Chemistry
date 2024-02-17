const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

const PORT = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token was not available");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return res.json("Token is wrong");
            next();
        });
    }
};

app.get('/home', verifyUser, (req, res) => {
    return res.json("Success");
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "2h" });
                        res.cookie("token", token);
                        res.json("Success");
                    } else {
                        res.json("Password is incorrect");
                    }
                });
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Internal Server Error");
        });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ name, email, password: hash })
                .then(employee => res.json(employee))
                .catch(err => res.json(err));
        }).catch(err => console.log(err.message));
});

// New route to clear the cookie
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json("Cookie cleared");
});

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
