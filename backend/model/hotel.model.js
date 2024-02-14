const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String},
    category: { type: String},
    image: { type: String},
    imageArr: { type: Array},
    address: { type: String},
    city: { type: String},
    state: { type: String},
    country: { type: String},
    price: { type: Number},
    rating: { type: Number},
    numberOfBathrooms: { type: Number},
    numberOfBeds: { type: Number},
    numberOfguest: { type: Number},
    numberOfBedrooms: { type: Number},
    numberOfStudies: { type: Number},
    hostName: { type: String},
    hostJoinedOn: { type: String},
    ameneties: { type: Array},
    healthAndSafety: { type: Array},
    houseRules: { type: Array},
    propertyType: { type: String},
    isCancelable: { type: Boolean}
})

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;