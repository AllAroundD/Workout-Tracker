const mongoose = require("mongoose")
const Schema = mongoose.Schema
const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    totalDuration: { type: Number, default: 0, min: 0 },
    exercises: [
        {
            type: { type: String },
            name: { type: String },
            distance: { type: Number },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number }
        }
    ]
})

// binding "template" to the actual mongo-collection it will be using called 'Workout'
module.exports = mongoose.model("Workout", WorkoutSchema)