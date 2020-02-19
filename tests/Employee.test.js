const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("Gets the name of the new instance", () => {
            //variables
            const obj = new Employee().getName();
            obj.name = true
            expect(obj.name).toEqual(true);
        });
    });
    describe("getId", () => {
        it("", () => {
            //vriabl
            const obj = new Employee().getId();
            
            expect(obj).toEqual(1);
        });
    });
    describe("getName", () => {
        it("", () => {
            //variables
            const obj = new Employee().getName();
            
            expect(obj).toEqual("");
        });
    });
    describe("getRole", () => {
        it("", () => {
            //variables
            const obj = new Employee().getRole();
            
            expect(obj).toEqual("Employee");
        });
    });
});