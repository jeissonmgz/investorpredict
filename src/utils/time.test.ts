import { Time } from "./time";


jest.mock("moment", ()=> 
           ()=> ({
               add: () => ({
                   format: () => {}
               })
           })
   )

describe('util time', () => { 

    it('getNextDays', ()=> {
        Time.getNextDays(7);

    })


 })