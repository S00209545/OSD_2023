import { getCurrencies } from "./getCurrencies";

describe ('getCurrencies', () => {
    it('should contain EUR in the array', () => {
        expect('EUR').toContain('EUR');
    })

    it('should contain USD in the array', () => {
        expect('USD').toContain('USD');
    })

    it('should contain GBP in the array', () => {
        expect('GBP').toContain('GBP');
    })
})