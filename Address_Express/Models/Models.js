 class Address  {
    constructor(housenumber, streetname, city, state, zip, unit){
        this.housenumber = housenumber,
        this.streetname = streetname,
        this.unit = unit,
        this.city = city,
        this.state = state,
        this.zip = zip
    };


};

class Customer {
    constructor(name, address){
        this.name=name,
        this.address=address
    }
};
console.log('The Models Module is now loaded');
module.exports = {
    Address:Address,
    Customer:Customer
};