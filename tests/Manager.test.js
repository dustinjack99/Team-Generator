const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
jest.setTimeout(30000);

describe("Manager", () => {
        it("needs to be an extension of Employee", () => {
            expect (new Manager()).toBeInstanceOf(Employee);
        });
    describe("getOffice", () => {
        it("takes user prompt to establish office phone of Manager", async () => {
            //User enters phone number - enter "555-555-5555" to pass test.
            const obj = await new Manager().getOffice();
            expect(obj.office).toEqual("555-555-5555");
        });
    });
});