var myNum = 10,
    myStr = 'строка',
    myBool = true,
    myArr = [1, 2, 3, 4, 5],
    myObj = { first: 'First Name', last: 'Last Name' };
console.log(myNum);
console.log(myString);
console.log(myBool);
console.log(myArr);
console.log(myObj);
console.log(myNum);

var decimal2 = myNum.toFixed(2);
console.log(decimal2);

var i = 222;
a = i++;
console.log(i, a);
b = ++i;
console.log(i, b);
c = i--;
console.log(i, c);
d = --i;
console.log(i, d);


var myTest = 20;
myTest += myNum;
console.log(myTest);
myTest -= myNum;
console.log(myTest);
myTest *= myNum;
console.log(myTest);
myTest /= myNum;
console.log(myTest);
myTest %= myNum;
console.log(myTest);

var myPi, myRound, myRandom, myPow;
myPi = Math.PI;
myRound = Math.round(89.279);
myRandom = Math.random() * 10;
myPow = Math.pow(3, 5);
console.log(myPi);
console.log(myRound);
console.log(myRandom);
console.log(myPow);

var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: ''
};
strObj.length = 30;
console.log(strObj.str);
console.log(strObj.str.length);

var isRamaPos;
isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace;
strObj.str = strObj.str.replace('мыла', 'моет');
strReplace = strObj.str.replace('мыла', 'держит');
strReplace = strReplace.replace('рама', 'Рама');
console.log(strReplace);

var strUpp, strLow;
strUpp = obj.str.toUpperCase();
strLow = obj.str.toLowerCase();
console.log(strUpp);
console.log(strLow);

var userObj = {
    firstName: 'Maxx',
    lastName: 'Pain',
    age: 42,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};
console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
};
console.log(defUpperStr('My Text'));
console.log(defUpperStr());

function evenFn(n) {
    var arr = [];
    for (var i = 1; i <= n; i++)
        if (i % 2 === 0) arr.push(i);
    return arr;
};
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
    var day = '';
    switch (n) {
        case 1: day = 'Понедельник'; break;
        case 2: day = 'Вторник'; break;
        case 3: day = 'Среда'; break;
        case 4: day = 'Четверг'; break;
        case 5: day = 'Пятница'; break;
        case 6: day = 'Суббота'; break;
        case 7: day = 'Воскресенье'; break;
        default: day = null; break;
    };
    return day;
};

console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(''));
console.log(weekFn(8));

function ageClassification(n) {
    return n > 0 ? n > 24 ? n > 44 ? n > 65 ? n > 75 ? n > 90 ? n > 122 ? null
        : 'долгожители'
        : 'старческий возраст'
        : 'пожилой возраст'
        : 'средний возраст'
        : 'молодой возраст'
        : 'детский возраст'
        : null;
};
console.log(ageClassification(-1));
console.log(ageClassification(24));
console.log(ageClassification(25));
console.log(ageClassification(45));
console.log(ageClassification(66));
console.log(ageClassification(76));
console.log(ageClassification(91));
console.log(ageClassification(123));

function oddFn(n) {
    var arr = [];
    var i = 0;
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
};
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
    return false;
};
function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
};
function cbPow(a, b) {
    return Math.pow(a, b);
};
function cbAdd(a, b) {
    return a + b;
};
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

