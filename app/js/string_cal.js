export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (str.length === 1) return parseInt(str);
        let delimiters=this.getdelimiter(str);


        str=this.get_number_part(str);
        delimiters.forEach(element => {
            str=str.replaceAll(element,",");
        })


        let numbers = str.replaceAll("\n",",").split(',').map(ele => parseInt(ele)).filter(ele=>ele<=1000);
        let neg_number=numbers.filter(ele => ele<0);
        if (neg_number.length>0) throw Error(`Negatives not allowed. [${neg_number.join(",")}]`);

        return numbers.reduce((sum, currr) => sum+currr);

    }
    hasdelimiter(str){
        return str.includes("//");
    }
    getdelimiter(str){
        if (this.hasdelimiter(str)) {
            if (str.includes('[')) {
                return str.split(/\[(.*?)\]/).filter((elem, key) => (key % 2 !== 0));
            } else {
                return [str.charAt(2)];
            }
        }
        return [','];
    }
    get_number_part(str){
        if(this.hasdelimiter(str)){
            return str.split(/\n(.*)/s)[1];
        }
        return str;
    }

}
let str = '//[***]\n1***2***3';
console.log(str.split(/\[(.*?)\]/));
console.log(str.split(/\[(.*?)\]/).filter((elem, key) => (key % 2 !== 0)))