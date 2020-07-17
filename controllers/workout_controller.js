
const Workout = require("../models/Workout.js")

// This function handles all of the routing
function router(app) {
    const path = require('path')
    public = path.join(__dirname, "../public")

    // Get index
    app.get("/", async function (req, res) {
        console.log('[GET /] Getting index')
        res.sendFile('./index.html', { root: public })
    })

    // Get exercise
    app.get("/exercise", async function (req, res) {
        console.log('[GET /exercise] Getting exercise')
        res.sendFile('./exercise.html', { root: public })
    })

    // Get stats
    app.get("/stats", async function (req, res) {
        console.log('[GET /stats] Getting stats')
        res.sendFile('./stats.html', { root: public })
    })

    // *** API routes ***
    // Get workouts
    app.get("/api/workouts", async function (req, res) {
        console.log('[GET /api/workouts] Getting workouts')
        Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => { res.json(dbWorkout) })
            .catch(err => { res.status(400).json(err) })
    })

    // Post workouts
    app.post("/api/workouts", async function ({ body }, res) {
        console.log('POST api/workouts: ', body)
        Workout.create(body)
            .then(data => {
                console.log(`Adding workout`)
                res.json(data)
            })
            .catch(err => {
                console.log("Error occured during insert: ", err)
                res.json(err)
            })
    })

    // Put workout
    app.put("/api/workouts/:id", async function ({ body, params }, res) {
        console.log(`[PUT /api/workouts/${params.id}] Adding exercise`)
        Workout.findByIdAndUpdate(
            params.id,
            // push the body to exercises and set the totalDuration
            { $push: { exercises: body }, $inc: { totalDuration: body.duration } },
            { new: true, runValidators: true }
        )
            .then(data => {
                res.json(data)
                console.log(`Adding ${params.id} ${data}`)
            })
            .catch(err => {
                console.log("Error occured during insert: ", err)
                res.json(err)
            })
    })

    app.get("/api/workouts/range", async function (req, res) {
        console.log('[GET /api/workouts/range]')
        Workout.find({})
            .then(dbWorkout => { res.json(dbWorkout) })
            .catch(err => { res.status(400).json(err) })
    })

}

module.exports = router