// handles just the /address route
var {Address} = require('../Models/Models.js');
function routeRegister(router){
    router.get('/address', function (req, res) {
        var address = new Address( 1058, 'Marlowe Drive', 'Clarksville', 'Indiana', 47129);
        res.json({address});
    });
};

module.exports = {
    routeRegister:routeRegister
}