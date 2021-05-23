'use strict';
require('dotenv').config();
const events =require('./events');
const faker = require('faker');
const stor = process.env.stor || 'azzam';


setInterval(()=>{
    let order ={
        storeName:stor,
        orderId:faker.datatype.uuid(),
        customerName:faker.name.findName(),
        address:`${faker.address.city()}, ${faker.address.stateAbbr()}`
    }
    events.emit('pickup',order);
},5000);

events.on('delivered',()=>{
    console.log(`thank you`);
})