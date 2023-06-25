// Install backend
const express = require('express')
// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

mongoose.connect('mongodb+srv://user123:password123Tech@cluster0.4ukcz5f.mongodb.net/MernTutorial?retryWrites=true&w=majority')

//* Tool to parse json content into object
app.use(express.json())

//* Request to get user data by following http://localhost:3001/getUsers
app.get("/getUsers", (req, res) => {
    // We put an empty object to find method to get all document inside users collection
    UserModel.find().then((err, result) => {
        // If error occur, we "response" by "jsonize" that error and send it back to FE
        if (err) {
            res.json(err)
        }
        // If not, we response the result which we get from UserModel
        else {
            res.json(result)
        }
    })
})

//* Request to add user data by following http://localhost:3001/createUser
app.post("/createUser", async (req, res) => {
    // Create an user object using request's content (we will add body content manually on thunderclient)
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

// add listen port for backend (3001 because React use 3000)
app.listen(3001, () => {
    console.log("Server runs perfectly");
})