module.exports = function toReadable(number) {
    const oneToTen = (num) => {
        switch (num) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            default:
                return "";
        }
    };

    const elevenToNineteen = (num) => {
        switch (num) {
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
            default:
                return "";
        }
    };

    const dozens = (num) => {
        switch (num) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            default:
                return "";
        }
    };

    const result = (num) => {
        // 0
        if (num === 0) {
            return "zero";
            // 1 to 10
        } else if (num > 0 && num <= 10) {
            return oneToTen(num);
            // 11 to 19
        } else if (num > 10 && num < 20) {
            return elevenToNineteen(num);
            // 20 to 99
        } else if (num >= 20 && num < 100) {
            //split num to digits and add to arr
            const arrNum = Array.from(String(num), Number);
            //default result string
            let res = `${dozens(arrNum[0])}`;

            if (num === 20 || arrNum[1] === 0) {
                return res;
            } else {
                res = `${res} ${oneToTen(arrNum[1])}`;
            }
            return res;
            // 100 to 999
        } else if (num >= 100 && num < 1000) {
            //split num to digits and add to arr
            const arrNum = Array.from(String(num), Number);
            //default result string
            let res = `${oneToTen(arrNum[0])} hundred`;
            let secondDozen = arrNum[1] * 10 + arrNum[2];

            if (secondDozen === 0) {
                return res;
            } else if (secondDozen <= 10) {
                res = `${res} ${oneToTen(secondDozen)}`;
            } else if (secondDozen > 10 && secondDozen < 20) {
                res = `${res} ${elevenToNineteen(secondDozen)}`;
            } else if ((secondDozen) => 20) {
                res = `${res} ${dozens(arrNum[1])}`;

                if (arrNum[2] === 0) {
                    return res;
                } else {
                    return (res = `${res} ${oneToTen(arrNum[2])}`);
                }
            }
            return res;
        }
    };

    //call func
    return result(number);
};
