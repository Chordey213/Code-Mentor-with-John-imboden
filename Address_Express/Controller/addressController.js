var {Address} = require('../Models/Models.js')
const dataAccess = require('../Data Access/addressDataAccess.js')

//GET 
async function getAddress(){
    let db = await dataAccess.connectToDatabase('./Database/AddressExpress.db');
};

//PUT
async function putAddress(addr){
    let db = await dataAccess.connectToDatabase('./Database/AddressExpress.db');
    await dataAccess.addAddress(db, addr);
}

//POST


//DELETE


module.exports = {
     getAddress: getAddress,
     putAddress:putAddress
    }