'use strict';
const events = require('./events');
require('./vendor');
require('./driver');

events.on('pickup', payload => {
    console.log({ event: 'pickup', time: (new Date()).toString(), payload });
});
events.on('in-transit', payload => {
    console.log({ event: 'in-transit', time: (new Date()).toString(), payload });
});
events.on('delivered', payload => {
    console.log({ event: 'delivered', time: (new Date()).toString(), payload });
});


// module.exports = events;