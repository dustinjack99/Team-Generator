const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
jest.setTimeout(30000);

describe("Engineer", () => {
    it("needs to be an extension of Employee", () => {
        expect (new Engineer()).toBeInstanceOf(Employee);
    });
    describe("getGithub", () => {
        it("takes user prompt to find out Engineer's GitHub username", async () => {
            //User enters github username - enter "dustinjack99" to test.
            const obj = await new Engineer().getGithub();
            expect(obj.github).toEqual("dustinjack99");
        });
    });
});