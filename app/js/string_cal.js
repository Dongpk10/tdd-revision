export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (str.length === 1) return parseInt(str);

        let numbers = str.split(',').map(ele => parseInt(ele));
        return numbers.reduce((sum, currr) => sum+currr);

    }

}