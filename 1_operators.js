// PART A: ARITHMETIC OPERATORS

// 1. Addition
let classCollection1 = 15000;
let classCollection2 = 12500;
console.log(classCollection1 + classCollection2);

let morningPages = 18;
let eveningPages = 25;
console.log(morningPages + eveningPages);

let mondayItems = 125;
let tuesdayItems = 178;
console.log(mondayItems + tuesdayItems);

let a = "10";
let b = 5;
let result = a + b;
console.log(result);

let x = 5;
let y = "3";
result = x + y;
console.log(result);

let p = "Hello";
let q = "World";
result = p + " " + q;
console.log(result);

let m = 0;
let n = false;
result = m + n;
console.log(result);

let val1 = 100;
let val2 = "200";
let val3 = val1 + val2;
console.log(val3);

// 2. Subtraction
let totalSeats = 80;
let occupiedSeats = 53;
console.log(totalSeats - occupiedSeats);

let totalMarks = 500;
let lostMarks = 35;
console.log(totalMarks - lostMarks);

let totalBoxes = 2500;
let sentBoxes = 875;
console.log(totalBoxes - sentBoxes);

a = "10";
b = 3;
result = a - b;
console.log(result);

x = "20";
y = "5";
result = x - y;
console.log(result);

p = "abc";
q = 1;
result = p - q;
console.log(result);

m = 10;
n = 0;
result = m / n;
console.log(result);

let val = 0 / 0;
console.log(val);

// 3. Multiplication
let notebookPrice = 45;
let notebookQuantity = 8;
console.log(notebookPrice * notebookQuantity);

let bottlesPerHour = 120;
let hours = 6;
console.log(bottlesPerHour * hours);

let rows = 7;
let plantsPerRow = 15;
console.log(rows * plantsPerRow);

a = "5";
b = 4;
result = a * b;
console.log(result);

x = "10";
y = "2";
result = x * y;
console.log(result);

p = "hello";
q = 2;
result = p * q;
console.log(result);

m = 5;
n = "0";
result = m * n;
console.log(result);

val1 = 3;
val2 = "4";
val3 = val1 * val2;
console.log(val3);

// 4. Division
let pencils = 144;
let students = 12;
console.log(pencils / students);

let distance = 360;
let travelHours = 6;
console.log(distance / travelHours);

let companyAmount = 72000;
let departments = 9;
console.log(companyAmount / departments);

a = "20";
b = 4;
result = a / b;
console.log(result);

x = "100";
y = "5";
result = x / y;
console.log(result);

p = 10;
q = 0;
result = p / q;
console.log(result);

m = -10;
n = 0;
result = m / n;
console.log(result);

val = 0 / 0;
console.log(val);

// 5. Modulus
let totalStudents = 53;
let groupSize = 5;
console.log(totalStudents % groupSize);

let candies = 128;
let candiesPerBox = 10;
console.log(candies % candiesPerBox);

let number = 24;
console.log(number % 2 === 0);

let toys = 237;
let toysPerBox = 6;
console.log(toys % toysPerBox);

let passengers = 185;
let busCapacity = 40;
console.log(passengers % busCapacity);

a = 10;
b = 0;
result = a % b;
console.log(result);

x = 0;
y = 5;
result = x % y;
console.log(result);

p = -10;
q = 3;
result = p % q;
console.log(result);

m = 10;
n = -3;
result = m % n;
console.log(result);

val1 = -10;
val2 = -3;
val3 = val1 % val2;
console.log(val3);

// 6. Exponentiation
let side = 6;
console.log(side ** 3);

let bacteria = 1;
console.log(bacteria * 2 ** 4);

side = 9;
console.log(side ** 2);

let base = 5;
let power = 4;
console.log(base ** power);

let pixels = 1024;
console.log(pixels ** 2);

side = -2;
let area = side ** 2;
console.log(area);

base = 2;
power = -1;
result = base ** power;
console.log(result);

val = 2 ** -2;
console.log(val);

x = 3;
y = 2;
let z = x ** y;
console.log(z);

a = 10;
b = 0;
result = a ** b;
console.log(result);


// PART B: ASSIGNMENT OPERATORS

// 1. Simple Assignment
let age = 17;
console.log(age);

let penPrice = 15;
console.log(penPrice);

let daysInWeek = 7;
console.log(daysInWeek);

let city = "Kalol";
console.log(city);

let piValue = 3.14159;
console.log(piValue);

let aa, bb, cc;
aa = bb = cc = 10;
console.log(aa, bb, cc);

let xx = 5;
let yy = xx;
xx = 10;
console.log(xx, yy);

let pp = 100;
let qq = pp;
let rr = qq;
console.log(pp, qq, rr);

let mm = "Hello";
let nn = mm;
mm = "World";
console.log(mm, nn);

let value1 = 25;
let value2 = value1;
let value3 = value2;
console.log(value1, value2, value3);

// 2. Add and Assign
let studentMarks = 200;
studentMarks += 35;
console.log(studentMarks);

let savings = 5000;
savings += 1200;
console.log(savings);

let battery = 45;
battery += 30;
console.log(battery);

let gamePoints = 1250;
gamePoints += 375;
console.log(gamePoints);

let libraryBooks = 840;
libraryBooks += 160;
console.log(libraryBooks);

a = "10";
a += 5;
console.log(a);

x = 5;
x += "3";
console.log(x);

p = 0;
p += false;
console.log(p);

m = 10;
m += true;
console.log(m);

val = "Hello";
val += "World";
console.log(val);

// 3. Subtract and Assign
let water = 1000;
water -= 375;
console.log(water);

let money = 500;
money -= 180;
console.log(money);

battery = 90;
battery -= 45;
console.log(battery);

let warehouseBoxes = 2400;
warehouseBoxes -= 950;
console.log(warehouseBoxes);

gamePoints = 2000;
gamePoints -= 625;
console.log(gamePoints);

a = "20";
a -= 5;
console.log(a);

x = "100";
x -= "50";
console.log(x);

p = 10;
p -= "abc";
console.log(p);

m = 5;
m -= true;
console.log(m);

val = 20;
val -= false;
console.log(val);

// 4. Multiply and Assign
let population = 5000;
population *= 3;
console.log(population);

let dailyProduction = 120;
dailyProduction *= 4;
console.log(dailyProduction);

let savingsAmount = 2000;
savingsAmount *= 2;
console.log(savingsAmount);

let gardenPlants = 50;
gardenPlants *= 5;
console.log(gardenPlants);

let score = 150;
score *= 3;
console.log(score);

a = "10";
a *= 2;
console.log(a);

x = "5";
x *= "4";
console.log(x);

p = "hello";
p *= 2;
console.log(p);

m = 5;
m *= "0";
console.log(m);

val = 3;
val *= "4";
console.log(val);

// 5. Divide and Assign
let cloth = 1200;
cloth /= 4;
console.log(cloth);

let budget = 80000;
budget /= 8;
console.log(budget);

let sugar = 960;
sugar /= 6;
console.log(sugar);

let tripDistance = 450;
tripDistance /= 5;
console.log(tripDistance);

let totalStudentMarks = 2500;
totalStudentMarks /= 10;
console.log(totalStudentMarks);

a = "100";
a /= 5;
console.log(a);

x = "200";
x /= "4";
console.log(x);

p = 10;
p /= 0;
console.log(p);

m = -10;
m /= 0;
console.log(m);

val = 0;
val /= 0;
console.log(val);

// 6. Modulus and Assign
let shopCandies = 137;
shopCandies %= 10;
console.log(shopCandies);

let coachStudents = 250;
coachStudents %= 7;
console.log(coachStudents);

let projectDays = 1000;
projectDays %= 7;
console.log(projectDays);

let hallChairs = 89;
hallChairs %= 5;
console.log(hallChairs);

let loanMonths = 365;
loanMonths %= 12;
console.log(loanMonths);

a = 10;
a %= 0;
console.log(a);

x = 0;
x %= 5;
console.log(x);

p = -10;
p %= 3;
console.log(p);

m = 10;
m %= -3;
console.log(m);

val = -10;
val %= -3;
console.log(val);

// 7. Exponentiation and Assign
let gardenSide = 10;
gardenSide **= 2;
console.log(gardenSide);

let cubeEdge = 4;
cubeEdge **= 3;
console.log(cubeEdge);

let sizeFactor = 3;
sizeFactor **= 2;
console.log(sizeFactor);

side = -2;
side **= 2;
console.log(side);

base = 2;
base **= -1;
console.log(base);

val = 2;
val **= -2;
console.log(val);

x = 3;
x **= 0;
console.log(x);

a = 10;
a **= 1;
console.log(a);


// PART C: COMPARISON & RELATIONAL OPERATORS

// 1. Loose Equality
let storedPassword = 1234;
let enteredPassword = "1234";
console.log(storedPassword == enteredPassword);

let userAnswer = 0;
let defaultAnswer = false;
console.log(userAnswer == defaultAnswer);

let input = "";
let submittedFlag = false;
console.log(input == submittedFlag);

let backendValue = null;
let frontendValue = undefined;
console.log(backendValue == frontendValue);

let deviceScore1 = 500;
let deviceScore2 = "500";
console.log(deviceScore1 == deviceScore2);

a = 0;
b = false;
console.log(a == b);

x = "";
y = false;
console.log(x == y);

p = "0";
q = 0;
console.log(p == q);

let emptyArray1 = [];
let zeroValue = 0;
console.log(emptyArray1 == zeroValue);

let emptyArray2 = [];
let falseValue = false;
console.log(emptyArray2 == falseValue);

// 2. Loose Inequality
let discountCode1 = "SAVE10";
let discountCode2 = "SAVE20";
console.log(discountCode1 != discountCode2);

let userRole = "admin";
let defaultRole = "guest";
console.log(userRole != defaultRole);

let correctAnswer = 42;
let userAnswerValue = "40";
console.log(correctAnswer != userAnswerValue);

let emailInput = "";
let emptyFlag = false;
console.log(emailInput != emptyFlag);

let userId = null;
let validId = 101;
console.log(userId != validId);

a = 0;
b = false;
console.log(a != b);

x = "";
y = false;
console.log(x != y);

p = "0";
q = 0;
console.log(p != q);

let nullValue = null;
let undefinedValue = undefined;
console.log(nullValue != undefinedValue);

let arrayValue = [];
let zero = 0;
console.log(arrayValue != zero);

// 3. Strict Equality
storedPassword = 1234;
enteredPassword = "1234";
console.log(storedPassword === enteredPassword);

let accountNumber1 = 1234567890;
let accountNumber2 = 1234567890;
console.log(accountNumber1 === accountNumber2);

let featureFlag = true;
let requiredState = 1;
console.log(featureFlag === requiredState);

let databaseValue = null;
let cacheValue = undefined;
console.log(databaseValue === cacheValue);

let score1 = 85;
let score2 = 85;
console.log(score1 === score2);

a = 0;
b = false;
console.log(a === b);

x = "";
y = false;
console.log(x === y);

p = "0";
q = 0;
console.log(p === q);

m = null;
n = undefined;
console.log(m === n);

val = NaN;
console.log(val === val);

// 4. Strict Inequality
let stringId = "101";
let numberId = 101;
console.log(stringId !== numberId);

let booleanStatus = true;
let numericStatus = 1;
console.log(booleanStatus !== numericStatus);

let password = "abc123";
let confirmPassword = "abc124";
console.log(password !== confirmPassword);

let serverData = null;
let localData = undefined;
console.log(serverData !== localData);

let playerId1 = 10;
let playerId2 = 20;
console.log(playerId1 !== playerId2);

a = 0;
b = false;
console.log(a !== b);

x = "";
y = false;
console.log(x !== y);

p = "0";
q = 0;
console.log(p !== q);

m = null;
n = undefined;
console.log(m !== n);

val = NaN;
console.log(val !== val);

// 5. Greater Than
let personAge = 20;
let votingAge = 18;
console.log(personAge > votingAge);

let cartTotal = 650;
let freeShippingLimit = 500;
console.log(cartTotal > freeShippingLimit);

let playerScore = 1200;
let requiredScore = 1000;
console.log(playerScore > requiredScore);

let monthlyIncome = 40000;
let minimumIncome = 30000;
console.log(monthlyIncome > minimumIncome);

let stepsToday = 11000;
let stepTarget = 10000;
console.log(stepsToday > stepTarget);

a = 5;
b = 5;
console.log(a > b);

x = "10";
y = "2";
console.log(x > y);

p = "5";
q = 10;
console.log(p > q);

m = null;
n = 0;
console.log(m > n);

val = undefined;
console.log(val > 0);

// 6. Less Than
let marksObtained = 30;
let failThreshold = 35;
console.log(marksObtained < failThreshold);

let expenses = 8000;
let budgetLimit = 10000;
console.log(expenses < budgetLimit);

let itemsLeft = 7;
let lowStockLimit = 10;
console.log(itemsLeft < lowStockLimit);

let vehicleSpeed = 40;
let minimumSpeed = 50;
console.log(vehicleSpeed < minimumSpeed);

let remainingTime = 4;
let warningLimit = 5;
console.log(remainingTime < warningLimit);

a = 5;
b = 5;
console.log(a < b);

x = "10";
y = "2";
console.log(x < y);

p = null;
q = 1;
console.log(p < q);

m = null;
n = 0;
console.log(m < n);

val = undefined;
console.log(val < 0);

// 7. Greater Than or Equal
personAge = 18;
votingAge = 18;
console.log(personAge >= votingAge);

let percentage = 75;
let minimumPercentage = 75;
console.log(percentage >= minimumPercentage);

let userAge = 14;
let minimumAge = 13;
console.log(userAge >= minimumAge);

let currentScore = 500;
let minimumScore = 500;
console.log(currentScore >= minimumScore);

let experience = 3;
let requiredExperience = 2;
console.log(experience >= requiredExperience);

a = 5;
b = 5;
console.log(a >= b);

x = null;
y = 0;
console.log(x >= y);

p = undefined;
q = 0;
console.log(p >= q);

m = "5";
n = 5;
console.log(m >= n);

val = "10";
let limit = 5;
console.log(val >= limit);

// 8. Less Than or Equal
let peopleInLift = 7;
let maxCapacity = 8;
console.log(peopleInLift <= maxCapacity);

let fileSize = 5;
let maxFileSize = 5;
console.log(fileSize <= maxFileSize);

let participantAge = 12;
let maxJuniorAge = 12;
console.log(participantAge <= maxJuniorAge);

let dataUsed = 9.5;
let dataLimit = 10;
console.log(dataUsed <= dataLimit);

let classStrength = 40;
let maxClassStrength = 40;
console.log(classStrength <= maxClassStrength);

a = 5;
b = 5;
console.log(a <= b);

x = null;
y = 0;
console.log(x <= y);

p = undefined;
q = 0;
console.log(p <= q);

m = "5";
n = 5;
console.log(m <= n);

val = "3";
limit = 5;
console.log(val <= limit);


// PART D: LOGICAL OPERATORS

// 1. Logical AND
let username = "admin";
let passwordNumber = 1234;
console.log(username === "admin" && passwordNumber === 1234);

let isLoggedIn = true;
let hasPermission = true;
console.log(isLoggedIn && hasPermission);

let inStock = true;
let price = 800;
console.log(inStock && price < 1000);

let studentMarksValue = 75;
let attendance = 80;
console.log(studentMarksValue > 65 && attendance > 70);

let isWeekend = true;
let isHoliday = false;
console.log(isWeekend && isHoliday);

a = 0;
b = 10;
result = a && b;
console.log(result);

x = 5;
y = 10;
result = (x > 3 && y) || 0;
console.log(result);

p = "Hello";
q = "";
r = "World";
result = p && q && r;
console.log(result);

val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);

x = 10;
y = 20;
result = (x && y) && (x > y);
console.log(result);

// 2. Logical OR
let passwordCorrect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid);

let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon);

let userAgeForEntry = 16;
let height = 155;
console.log(userAgeForEntry > 18 || height > 150);

let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven);

let levelScore = 900;
let timeBonus = true;
console.log(levelScore > 1000 || timeBonus);

a = 0;
b = false;
let c = "";
let d = null;
let e = 42;
result = a || b || c || d || e;
console.log(result);

x = "Hello" || 0;
y = 0 || "Hi";
console.log(x, y);

a = 10;
b = 20;
result = (a < 5) || (b > 15);
console.log(result);

val = 5;
condition = val || (val = 0);
console.log(condition);
console.log(val);

x = "" || 0 || false || null || undefined || "OK";
console.log(x);

// 3. Logical NOT
let isBanned = false;
console.log(!isBanned);

let isCompleted = false;
console.log(!isCompleted);

let isOn = true;
console.log(!isOn);

let isActive = false;
console.log(!isActive);

let isReadOnly = false;
console.log(!isReadOnly);

a = 0;
b = 1;
console.log(!a, !b);

x = "Hello";
y = "";
console.log(!x, !y);

val = 5;
result = !val;
console.log(result);

a = 10;
b = 20;
result = !(a && b);
console.log(result);

x = 0;
y = 1;
result = !(x || y);
console.log(result);

// 4. Mixed Logical Operators
isMember = true;
isBanned = false;
console.log(isMember && !isBanned);

let isStudent = true;
let isSenior = false;
isBanned = true;
console.log((isStudent || isSenior) && !isBanned);

nameGiven = true;
emailGiven = false;
phoneGiven = true;
console.log(nameGiven && (emailGiven || phoneGiven));

let isAdmin = true;
let hasToken = false;
let isSuspended = false;
console.log((isAdmin || hasToken) && !isSuspended);

let scoreAbove = 1200;
timeBonus = false;
let extraLife = true;
console.log(scoreAbove > 1000 && (timeBonus || extraLife));

a = 0;
b = 10;
c = 20;
result = a || b && c;
console.log(result);

p = true;
q = false;
r = true;
result = p && q || r;
console.log(result);

x = 10;
y = 20;
result = !(x && y) || (x > 5 && y < 30) && true;
console.log(result);

a = 5;
b = 0;
c = 10;
result = a && b || c;
console.log(result);

let val1Mixed = false;
let val2Mixed = true;
let val3Mixed = false;
result = !(val1Mixed || val2Mixed) && val3Mixed || true;
console.log(result);


// PART E: INCREMENT / DECREMENT

// Part a

// 1
let counter = 5;
counter++;
console.log(counter);

// 2
let lives = 3;
lives--;
console.log(lives);

// 3
let scoreValue = 10;
scoreValue++;
console.log(scoreValue);

// 4
let items = 8;
items--;
console.log(items);

// 5
let count = 0;
count++;
count++;
console.log(count);

// Part b

// 6
let incrementX = 5;
let incrementY = incrementX++;
console.log(incrementX, incrementY);

// 7
let incrementA = 5;
let incrementB = ++incrementA;
console.log(incrementA, incrementB);

// 8
lives = 3;
let previousLives = lives--;
console.log(lives, previousLives);

// 9
let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts);

// 10
let points = 100;
points++;
points--;
console.log(points);

// Part c

// 11
x = 10;
y = x++;
z = ++x;
console.log(x, y, z);

// 12
a = 5;
b = a-- + ++a;
console.log(a, b);

// 13
m = 7;
n = --m + m++;
console.log(m, n);

// 14
p = 3;
q = p++ + ++p + p;
console.log(p, q);

// 15
val = 0;
val = val++ + ++val;
console.log(val);


// PART F: TYPEOF OPERATOR

// Part a

// 1
let name = "Rahul";
console.log(typeof name);

// 2
let ageValue = 25;
console.log(typeof ageValue);

// 3
let isStudentValue = true;
console.log(typeof isStudentValue);

// 4
let cityValue;
console.log(typeof cityValue);

// 5
console.log(typeof null);

// Part b

// 6
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);

// 7
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

// 8
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof function(){});

// 9
let priceValue = 99.99;
let message = "Welcome";
let activeValue = false;
console.log(typeof priceValue);
console.log(typeof message);
console.log(typeof activeValue);

// 10
let nullVariable = null;
console.log(typeof nullVariable);
console.log(typeof nullVariable === "object");

// Part c

// 11
console.log(typeof typeof 100);
console.log(typeof typeof "Hi");
console.log(typeof typeof true);

// 12
a = 10;
b = "10";
console.log(typeof a === typeof b);
console.log(typeof a == typeof b);

// 13
console.log(typeof null === "object");
console.log(typeof [] === "object");
console.log(typeof {} === "object");

// 14
let typeValue;
console.log(typeof typeValue);
typeValue = null;
console.log(typeof typeValue);
typeValue = 0;
console.log(typeof typeValue);

// 15
console.log(typeof NaN === "number");
console.log(typeof Infinity === "number");
console.log(typeof (1 / 0));


// PART G: TYPE COERCION

// Part a

// 1
let stringNumber = "25";
let convertedNumber = Number(stringNumber);
console.log(convertedNumber + 10);

// 2
let numberValue = 100;
let convertedString = String(numberValue);
console.log(convertedString + " rupees");

// 3
let zeroNumber = 0;
console.log(Boolean(zeroNumber));

// 4
let helloValue = "Hello";
console.log(Boolean(helloValue));

// 5
let unaryNumber = +"50";
console.log(unaryNumber * 2);

// Part b

// 6
console.log("10" - 5);
console.log("10" + 5);
console.log("10" * 2);
console.log("10" / 2);

// 7
console.log("5" - "2");
console.log("5" + "2");
console.log("5" * "2");
console.log("5" / "2");

// 8
console.log(Number("123"));
console.log(Number("123abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// 9
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));

// 10
console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(100 + "");

// Part c

// 11
console.log("5" + 3 + 2);
console.log(5 + 3 + "2");
console.log("5" - 3 + 2);
console.log(5 - "3" + "2");

// 12
console.log(true + true);
console.log(true + false);
console.log(true + "false");
console.log(false + "true");

// 13
console.log(null + 5);
console.log(undefined + 5);
console.log(null + "5");
console.log(undefined + "5");

// 14
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});

// 15
let coercionA = "10";
let coercionB = 5;
let coercionC = coercionA + coercionB;
let coercionD = coercionA - coercionB;
let coercionE = +coercionA + coercionB;
console.log(coercionC, typeof coercionC);
console.log(coercionD, typeof coercionD);
console.log(coercionE, typeof coercionE);

// 16
console.log(!!"Hello");
console.log(!!"");
console.log(!!0);
console.log(!!1);
console.log(!!null);
console.log(!!undefined);

// 17
console.log(Number(""));
console.log(Number(" "));
console.log(Number("0"));
console.log(Number("  25  "));
console.log(Number("25px"));

// 18
let val1Coercion = "5";
let val2Coercion = 2;
console.log(val1Coercion + val2Coercion);
console.log(+val1Coercion + val2Coercion);
console.log(val1Coercion - val2Coercion);
console.log(val1Coercion * val2Coercion);
console.log(val1Coercion / val2Coercion);


// BONUS MIXED PRACTICE

// 19
let mixedCount = 5;
console.log(typeof mixedCount++);
console.log(mixedCount);
console.log(typeof ++mixedCount);
console.log(mixedCount);

// 20
let stringX = "10";
let stringY = ++stringX;
console.log(stringX, stringY, typeof stringX, typeof stringY);

// 21
let stringA = "5";
let stringB = stringA++;
console.log(stringA, stringB, typeof stringA, typeof stringB);

// 22
console.log(typeof (1 + "2"));
console.log(typeof (1 - "2"));
console.log(typeof (1 * "2"));
console.log(typeof (1 / "2"));

// 23
let mixedValue = null;
console.log(typeof mixedValue);
console.log(mixedValue + 1);
console.log(mixedValue - 1);
console.log(mixedValue * 1);
console.log(Boolean(mixedValue));
