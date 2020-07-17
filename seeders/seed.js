require('dotenv').config()
let mongoose = require("mongoose")
let db = require("../models")
// connect to the mongo DB using mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) throw err
    console.log("DB Connected Successfully")
  })
// Add all the data to the array to be used
let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 9),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    totalDuration: 25,
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    totalDuration: 25,
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 4),
    totalDuration: 30,
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 3),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 2),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 1),
    totalDuration: 30,
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        distance: 2,
        weight: 150,
        reps: 10,
        sets: 4
      }
    ]
  }
]
// delete any data that was there and then insert the data
db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
