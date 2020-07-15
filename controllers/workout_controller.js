


function router(app) {
    const path = require('path')

    public = path.join(__dirname, "../public")

    // Get index
    app.get("/", async function (req, res) {
        console.log('[GET] Getting index')
        res.sendFile('./index.html', { root: public })
    })

    // Get exercise
    app.get("/exercise", async function (req, res) {
        console.log('[GET] Getting exercise')
        res.sendFile('./exercise.html', { root: public })
    })

    // Get stats
    app.get("/stats", async function (req, res) {
        console.log('[GET] Getting stats')
        res.sendFile('./stats.html', { root: public })
    })

    // Get workouts
    app.get("/api/workouts", async function (req, res) {
        console.log('[GET] Getting workouts')
        // res.sendFile('./stats.html', { root: public })
    })


    // Put workout
    app.put("/api/workouts/:id", async function (req, res) {
        console.log('[PUT] Adding exercise')
        // res.sendFile('./stats.html', { root: public })
    })

}


module.exports = router