const burger = require("../models/burger")

function router(app) {
    app.get("/", async function (req, res) {
        console.log('[GET] getting list of burgers')
        const burgersAvailable = await burger.getAvailable()
        const burgersDevoured = await burger.getDevoured()
        console.log(`burgersAvailable: `, burgersAvailable)
        console.log(`burgersDevoured: `, burgersDevoured)
        res.render('index', { burgersAvailable, burgersDevoured })
    })
    app.post("/", async function (req, res) {
        console.log(`[POST] received this data: ${req.body}`)
        await burger.addBurger(req.body.burger)
        console.log(`new list of burgers: ${burger.getAvailable()}`)
        res.redirect("/")
    })
    app.get("/devour/:id", async function (req, res) {
        await burger.devourBurger(req.params.id)
        console.log(`[GET] burger was devoured: ${req.params.id}`)
        res.redirect("/")
    })

}

module.exports = router