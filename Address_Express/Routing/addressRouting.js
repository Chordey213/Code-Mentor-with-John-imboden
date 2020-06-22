// handles just the /address route
var {Address} = require('../Models/Models.js');
const addressController = require('../controller/addressController');

function routeRegister(router){
    router.get('/address', function (req, res) {
        var addressController = require('../controller/addressController');
        var address = addressController.getAddress();
        res.json({address});
    });

    router.post('/address', function (req,res) {
        var message = "Something, Something, DANGER ZONE";
        res.json({message});
    });

    router.put('/address', async function (req, res){
        var addr = new Address(req.body.housenumber, req.body.streetname, req.body.city, req.body.state, req.body.zip, req.body.unit);
        console.log(addr);  
        await addressController.putAddress(addr);
        res.json('Address Successfully added');
    });

    router.delete('/address', function (req, res){
        
    });
};



module.exports = {
    routeRegister:routeRegister
}