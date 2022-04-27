describe('services index', () => { 
    it('should render', async ()=> {
        jest.mock("./coins/coins.services", ()=> ({}))
        jest.mock("./models/coins.models", ()=> ({}))
        await require('./index')
    })
 })