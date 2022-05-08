export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (str.length === 1) return parseInt(str);

        let numbers = str.split(',')
        return parseInt(numbers[0]) + parseInt(numbers[1]);
    }

}