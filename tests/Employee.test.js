const Employee = require('../lib/Employee');
jest.setTimeout(30000);

describe("Employee", () => {
    describe("getNumber", () => {
        it("takes user prompt to establish number of employees", async () => {
            //User enters number of employees - enter "3" to test.
            const obj = await new Employee().getNumber();
            expect(obj.number).toEqual("3");
        });
    });
    describe("getName", () => {
        it("takes user prompt to establish name of team members", async () => {
            //User enters name of team member - enter "Dustin" to pass test.
            const obj = await new Employee().getName();
            expect(obj.name).toEqual("Dustin");
        });
    });
    describe("getId", () => {
        it("takes user prompt to establish job role", async () => {
            //User chooses job role - choose any role to pass test.
            const obj = await new Employee().getId();
            expect(obj.id).toEqual("Manager");
        });
    });
    describe("getEmail", () => {
        it("takes user prompt to establish email", async () => {
            //User enters email - enter "jackson.com" to test.
            const obj = await new Employee().getEmail();
            expect(obj.email).toEqual("jackson.com");
        });
    });
});