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
    test("for //;\n1;2 return 3",()=>{
        expect(stringCalculator.add('//;\n1;2')).toBe(3);

    });
    test("for '1\n2,3' return 6",()=>{
        expect(stringCalculator.add("1\n2,3")).toBe(6);

    });
    test("for '1\n-2,3' throw error",()=>{
        expect(() => (stringCalculator.add('1\n-2,3'))).toThrow();
        expect(() => (stringCalculator.add('1\n-2,3'))).toThrow(Error);
        expect(() => (stringCalculator.add('1\n-2,3'))).toThrow('Negatives not allowed. [-2]');

    });
    test("for '1\n-2,3,-4' thow error",()=>{
        expect(() => (stringCalculator.add('1\n-2,3,-4'))).toThrow();
        expect(() => (stringCalculator.add('1\n-2,3,-4'))).toThrow(Error);
        expect(() => (stringCalculator.add('1\n-2,3,-4'))).toThrow('Negatives not allowed. [-2,-4]');

    });
    test("ignore number >1000",()=>{
        expect(stringCalculator.add('1\n,2,1004')).toBe(3);
    });
    test('for "//[***]\n1***2***3" returns 6',()=>{
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6);
    });
    test('//[**][%%]\n1**2%%3" returns 6',()=>{
        expect(stringCalculator.add("//[**][%%]\n1**2%%3")).toBe(6);
    });


});