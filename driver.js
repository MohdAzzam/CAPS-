'use strict';

const events=require('./events');

events.on('pickup',(payload)=>{
    setTimeout(()=>{
        console.log(`DRIVER: picked up ${payload.orderId}`)
        events.emit('in-transit',payload);
    },1000)
    setTimeout(()=>{
        console.log('delivered');
        events.emit('delivered',payload)
    },3000)
});
