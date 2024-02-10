const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee'); // Corrected the import name

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) { // Use strict equality check ===
                    res.json("Success");
                } else {
                    res.json("Password is incorrect");
                }
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
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json(err));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
