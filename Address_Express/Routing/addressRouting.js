// handles just the /address route
var {Address} = require('../Models/Models.js');

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
        
    });

    router.delete('/address', function (req, res){
        
    });
};



module.exports = {
    routeRegister:routeRegister
}