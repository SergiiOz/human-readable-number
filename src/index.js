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
                return "fourty";
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
        if (num === 0) {
            return "zero";
        } else if (num > 0 && num <= 10) {
            return oneToTen(num);
        } else if (num > 10 && num < 20) {
            return elevenToNineteen(num);
        } else if (num > 20 && num < 100) {
            const arrNum = Array.from(String(num), Number);
            let res = `${dozens(arrNum[0])} ${oneToTen(arrNum[1])}`;
            return res;
        } else if (num >= 100 && num < 1000) {
            const arrNum = Array.from(String(num), Number);
            let res = `${oneToTen(arrNum[0])} hundred ${dozens(
                arrNum[1]
            )} ${oneToTen(arrNum[2])}`;
            return res;
        }
    };

    //call func
    result(number);
};
