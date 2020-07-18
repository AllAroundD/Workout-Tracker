require('dotenv').config()      // loads confirmation information from the .env file
const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan");
const app = express()
const routesController = require("./controllers/workout_controller.js")

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
        if (err) throw err
        console.log("DB Connected Successfully")
    })

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080
app.use(logger("dev"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

routesController(app)
app.use(express.static('public'))

// Start the server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when the server has started
    console.log("Server listening on port " + PORT)
})