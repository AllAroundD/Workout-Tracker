const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: { type: String, trim: true, required: "Please enter a type" },
    name: { type: String, trim: true, required: "Please enter a name" },
    duration: { type: Number, trim: true, required: "Please enter a duration" },
    weight: { type: Number, trim: true },
    sets: { type: Number, trim: true },
    reps: { type: Number, trim: true },
    distance: { type: Number },
    createdAt: { type: Date, default: Date.now }
})

// binding "template" to the actual mongo-collection it will be using called 'exercises'
module.exports = mongoose.model("exercises", ExerciseSchema);