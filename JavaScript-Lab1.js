// lab 1

//q1 
function varType (variable) {
    return typeof (variable) ;
}

// q2
function sum (x,y) {
    return(x+y) ;
}
function sub (x,y) {
    return(x-y) ;
}
function multi (x,y) {
    return(x*y) ;
}
function div (x,y) {
    return(x/y) ;
}

// q3
function isNan (x) {
    return isNaN (x) ;
}
console.log (isNan(1));
console.log (isNan('xyz'));

// q4
function checkNum (x) {
    if (x % 2 == 0 ){
        return ("x is even number");
    } 
    else {
        return ("x is odd number");
    } 
}
console.log (checkNum(1));
console.log (checkNum(2));

// q5
function concatenateStrings (x , y) {
    return x +" " + y ;
}
console.log( concatenateStrings("Hi","Welcome!"));

//q6 
function toUpperCase (string) {
    return string.toUpperCase();
}
console.log(toUpperCase("this is string"));

//q7
function charAt (string , index) {
    return string.charAt(index);
}
console.log(charAt("HelloWorld",5));

//q8
function greet (name) {
    return `Hello , ${name}`;
}
console.log(greet("Asmaa"));

//q9 
function checkValue (value) {
    return (typeof value === "undefined" || value === null );
}
console.log(checkValue(undefined));
console.log(checkValue(null));

//q10
function random (min , max) {
    return Math.random() * (max - min) + min;
}
console.log(random(2,4));

//q11
function checkNumber (x) {
    if (x > 0) {
        return ("positive");
    }
    else if (x < 0) {
        return ("negative");
    }
    else 
        return ("zero");
}
console.log(checkNumber(10));
console.log(checkNumber(-10));
console.log(checkNumber(0));
