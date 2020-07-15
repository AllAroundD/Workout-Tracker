const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{ type: Schema.Types.ObjectId, ref: "exercises" }],
    createdAt: { type: Date, default: Date.now }
})

// binding "template" to the actual mongo-collection it will be using called 'Workouts'
module.exports = mongoose.model("Workout", WorkoutSchema);