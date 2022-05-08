import {StringCalculator} from  "../js/string_cal"
describe('string calculator tdd', () => {
    let stringCalculator;
    beforeAll(() => {
        stringCalculator = new StringCalculator();
    });
    test("for empty string return 0",()=>{
        expect(stringCalculator.add("")).toBe(0);

    });
    test("for '1' return 1",()=>{
        expect(stringCalculator.add("1")).toBe(1);

    });
    test("for '1,2' return 2",()=>{
        expect(stringCalculator.add("1,2")).toBe(3);

    });
    test("for '1,2,3' return 6",()=>{
        expect(stringCalculator.add("1,2,3")).toBe(6);

    });

});