
function routeRegister(router){
var {Customer, Address} = require('../Models/Models')
router.get('/customer', (req, res)=> {
    var address = new Address( 1058, 'Marlowe Drive', 'Clarksville', 'Indiana', 47129);
    var customer = new Customer('Cory Wallace', address);
    res.json({customer});
});

};
module.exports = {
    routeRegister:routeRegister
}