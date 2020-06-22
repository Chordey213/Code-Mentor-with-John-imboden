//Pull in the SQLite3 framework
const sqlite3 = require('sqlite3').verbose();
var { Address } = require('../Models/Models.js');
//Create a function that connects to the database on demand

async function connectToDatabase(databaseAddress){
    return new Promise((resolve, reject) => {
        let db = new sqlite3.Database('./Database/AddressExpress.db', (err) => {
            if(err){
                console.error(err.message);
                return reject(err);
            }
            console.log('Connected to the Addressexpress database')
            resolve(db);
        })
    })
};

 async function addAddress(db, addr){
     return new Promise((resolve, reject) => {
         db.run(`INSERT INTO Address(housenumber, streetname, city, state, zip, unit) VALUES(?, ?, ?, ?, ?, ?)`, [addr.housenumber, addr.streetname, addr.city, addr.state, addr.zip, addr.unit], function(err) {
            if(err){
                reject(err);
            }
            resolve()
         })
     })
 };

module.exports = {
    connectToDatabase:connectToDatabase,
    addAddress:addAddress
}
