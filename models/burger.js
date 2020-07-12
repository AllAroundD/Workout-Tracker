// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm")

// function to get the list of available burgers from the table
async function getAvailable(){
    const burgers = await orm.selectAll()
    console.log(`burgersAvailable`,burgers)
    return burgers.filter(burger=>burger.devoured == false)
}

// function to get the list of devoured burgers from the table
async function getDevoured(){
    const burgers = await orm.selectAll()
    return burgers.filter(burger=>burger.devoured == true)
}

// function to add the burger to the burger table
async function addBurger(name){
    return orm.addBurger(name)
}

// function to set "devoured" field to true for the burger id
async function devourBurger(id){
    return orm.updateBurger(id, "devoured", true)
}

module.exports = {
    getAvailable, getDevoured, addBurger, devourBurger
}