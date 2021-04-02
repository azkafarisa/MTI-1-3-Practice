let result = 0

const Bonus = (cokelat) => { 
    if (cokelat < 5) {
        return cokelat;
    }
    else {
        cokelat = cokelat + Bonus(Math.floor(cokelat/5));
        return cokelat;
    }
};
 
 const test = (testCase, result) => {
     if (testCase !== result) return console.log(false);
     return console.log(true);
 };
 
 test(Bonus(60), 74);
 test(Bonus(100), 124);
 test(Bonus(1000), 1249);
 test(Bonus(1234), 1539);