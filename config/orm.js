var db = require("./connection");

// select all records from the burgers table
function selectAll() {
    // return db.query("SELECT * FROM burgers")
    return new Promise( (resolve, reject) => {
        db.query("SELECT * FROM burgers", (err, res) => {
            if (err) throw err;
            resolve(res);
          });
    })
}

// insert the burger name into the burgers table
function addBurger(name) {
    // return db.query("INSERT INTO burgers SET ?", { burgerName: name })
    console.log(`in addBurger: ${name}`)
    return new Promise( (resolve, reject) => {
        db.query("INSERT INTO burgers SET ?", { burger_name: name }, (err, res) => {
            if (err) throw err;
            resolve(res);
          });
    })
}

// update one burger based on column and value passed
function updateBurger(id, column, value) {
    // return db.query("UPDATE burgers SET ? WHERE ?", [{ [column]: value, id }] )
    return new Promise( (resolve, reject) => {
        db.query("UPDATE burgers SET ? WHERE ?", [{ [column]: value}, {['id']: id}], (err, res) => {
            if (err) throw err;
            resolve(res);
          })
    })
}

module.exports = {
    selectAll, addBurger, updateBurger
}