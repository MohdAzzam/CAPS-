'use strict';
const events = require('../events');
require('../caps');
require('../vendor')
require('../driver')

describe('Finally the Test Part ',()=>{
    let  data= {
         storeName: 'azzam',
         orderId: '001d6ec7-912f-4c5a-bf71-b7844c7d1ce7',
         customerName: 'Nellie Bode',
         address: 'West Anastacioton, SC'
       }
    it('test pickup',()=>{
        console.log = jest.fn();
        events.emit('pickup', data);
        expect(console.log).toHaveBeenCalled();
    })
    it('test in-transit',()=>{
        console.log = jest.fn();
        events.emit('in-transit', data);
        expect(console.log).toHaveBeenCalled();
    })
    it('test delivered',()=>{
        console.log = jest.fn();
        events.emit('delivered', data);
        expect(console.log).toHaveBeenCalled();
    })
})