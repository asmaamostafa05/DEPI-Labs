// lab 2


//q1
function capitalizeWords(string) {
return string[0].toUpperCase() + string.slice(1);
}
console.log(capitalizeWords("asmaa")); 


//q2
function mergeSortedArray (array1 , array2) {
    let merged =[] ;
    let i = 0 ;
    let j = 0 ;

    while ( i < array1.length && j < array2.length ) {
        if ( array1[i] < array2[j]) {
            merged.push(array1[i]);
            i++;
        }
        else {
            merged.push(array2[j]);
            j++;
        }
    }

    while ( i < array1.length ) {
        merged.push(array1[i]);
        i++;
    }
    
    while ( j < array2.length ) {
        merged.push(array2[j]);
        j++;
    }

    return merged ;
}
console.log(mergeSortedArray([1,3,5],[2,4,6]));


//q3
//without reduce
function sumOfSquares(array) {
    let sum =0;
    for ( let i = 0; i < array.length ; i++ ) {
        let square = array[i]*array[i];
        sum += square ;
    }
    return sum ;
}
console.log(sumOfSquares([1,2,3]));

//with reduce
function sumOfSquares(array) {
    return array.reduce((acc,num) => acc + num * num , 0);
}
console.log(sumOfSquares([1,2,3]));


//q4
function filterArray(array , callBackFun) {
    let result =[] ;
    for (let i = 0 ; i < array.length ; i++) {
        if (callBackFun(array[i])) {
            result.push(array[i]);
        }
    }
    return result ;
}

let numbers = [1,2,3,4,5,6,7,8,9,10] ;
let filtered = filterArray(numbers , function(num) {
    return num > 5 ;
}) ;
console.log(filtered);


//q5
function mapArray (array , callBackFunction) {
    let result=[] ;
    for (let i = 0 ; i < array.length ; i++) {
            result.push(callBackFunction(array[i]));
    }
    return result ;
}

let inputs =[1,2,3,4,5,6,7,8,9,10] ;
let newArray = mapArray(inputs , function(num) {
    return  num *2 ;
} ) ;
console.log(newArray);


//q6 
function reduceArray (array , callBackFunction , initialValue) {
    let total = initialValue ;
    for ( let i = 0 ; i < array.length ; i++) {
        total = callBackFunction(total , array[i]);
    }
    return total ;
}

let items =[2,4,6,8,10] ;
let total = reduceArray(items, function(total , num){
    return total = total + num ;
}, 0) ;
console.log("total =" , total) ;


//q7
function forEachArray(array ,callBackFunction) {
    for ( let i = 0 ; i <array.length ; i++) {
        callBackFunction(array[i]);
    }
}

let result = forEachArray([1,2,3], function(num) {
    console.log(num*3) ;
}) ;


//q8
function findMax (array) {
    return Math.max(...array);
}

let array=[1,2,3,4,5,6,7] ;
console.log(findMax(array));


//q9
function mergeObjects (object1 , object2){
    return {...object1 , ...object2} ;
}

let a = {name : "Asmaa" , age : 23} ;
let b = {age : 25 , city : "Mansoura"} ;

let merged = mergeObjects(a,b);
console.log(merged);


//q10
function invertObject (object1) {
    let object2 ={};
    for (let key in object1) {
        let value = object1[key] ;
        object2[value] = key ;
    }
    return object2 ;
}

let object1={a : 1 , b : 2 , c : 3} ;
let swapped = invertObject(object1) ;
console.log(swapped) ;


//q11
function omitKeys (object1 , arrayOfKeys) {
    let object2 ={} ;

    for (let key in object1 ) {
        let found = false;

        for (let i = 0 ; i <arrayOfKeys.length ; i++) {
            if (arrayOfKeys[i] === key ) {
                found = true ;
                break ;
            }
        }

        if (!found) {
            object2[key] = object1[key] ;
        }
    }
    return object2 ;
}

let object = { a: 1 , b: 2 , c: 3 , d: 4 } ;
let omit = [ "b" , "d" ] ;
console.log(omitKeys(object , omit)) ;


//q12
function pickKeys (object1 , arrayOfKeys) {
    let object2 = {} ;

    for (let key in object1 ) {

        for (let i = 0 ; i < arrayOfKeys.length ; i++) {

             if (arrayOfKeys[i] === key) {
                object2[key] = object1[key] ;
                break ;
            }
        }
    }
    return object2 ;
}

let obj = { a: 1 , b: 2 , c: 3 , d: 4 } ;
let pick = [ "b" , "d" ] ;
console.log(pickKeys(obj , pick)) ;


//q13
function reverseArray(array) {
    let reversed = [] ;

    for ( let i = array.length ; i >= 0 ; i-- ) {
        reversed.push(array[i]) ;
    }
    return reversed ;
}

let test = [1, 2, 3, 4, 5] ;
console.log(reverseArray(test)) ;


//q14
function countOccurrences(array , value) {
    let counter= 0 ;
    for ( let i = 0 ; i < array.length ; i++) {
        if (array[i] === value) {
            counter++ ;
        }
    }
    return counter ;
}
let arrayOfNumbers = [1,2,3,4,1,2,3,1,2,1] ;
console.log(countOccurrences(arrayOfNumbers , 1)) ;

