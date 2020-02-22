const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');
jest.setTimeout(30000);

describe("Intern", () => {
    it("needs to be an extension of Employee", () => {
        expect (new Intern()).toBeInstanceOf(Employee);
    });
    describe("getSchool", () => {
        it("takes user prompt to establish Intern's school", async () => {
            //User enters school - enter "mnsu" to pass test.
            const obj = await new Intern().getSchool();
            expect(obj.school).toEqual("mnsu");
        });
    });
});