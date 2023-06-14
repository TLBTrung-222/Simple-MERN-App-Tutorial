//* Install backend
const express = require('express')
//* Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user123:password123Tech@cluster0.4ukcz5f.mongodb.net/MernTutorial?retryWrites=true&w=majority')


//* add listen port for backend (3001 because React use 3000)
app.listen(3001, ()=> {
    console.log("Server runs perfectly");
})