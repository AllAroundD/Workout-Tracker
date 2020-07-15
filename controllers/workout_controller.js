
const Workout = require("../models/Workout.js");

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

    // Get workouts
    app.get("/api/workouts", async function (req, res) {
        console.log('[GET /api/workouts] Getting workouts')
        Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => { res.json(dbWorkout) })
            .catch(err => { res.status(400).json(err) })
    })


    // Put workout
    app.put("/api/workouts/:id", async function (req, res) {
        console.log(`[PUT /api/workouts/${req.params.id}] Adding exercise`)
        // res.sendFile('./stats.html', { root: public })
    })

    app.get("/api/workouts/range", async function (req, res) {
        console.log('[GET /api/workouts/range]')
        Workout.find({})
            .then(dbWorkout => { res.json(dbWorkout) })
            .catch(err => { res.status(400).json(err) })
    })

}


module.exports = router