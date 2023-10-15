//  we could generalize our function so that we pass in our specific instructor only when we run the copyAnd Manipulate funciton!

let array1 = [1,2,3,4,5];

const copyArrayManipulate = (array) => {
    const outPut = [];
    for(let i = 0; i < array.length; i++){
        outPut.push(array[i]*2);
    };
    return outPut
}
const multiple = copyArrayManipulate(array1) // [2,4,6,8,10];


// is this the right way to to, I dont thinks so, then what is the right way to do, by creating a function 


let array2 = [1,2,3,4,5];

const copyArrayManipulate2 = (array,instructor) => {
    let outPut = []
    for(let i = 0; i< array.length; i++){
        outPut.push(instructor(array[i]))

    }
    return outPut
}
function multiples(input){
    return input*2
}

const newReult = copyArrayManipulate2(array2,multiples)

//  now look at this function this is more usable then the previous one we created, and by the way the copyArrayManipulate2 is  the HighOrder function and the instructor we passing that is a callback function 


// 1. HighOrder function :->

// A function that take another function as the argument or return a another function as the result that function is known as HigherOrder funciton and the function is the argument that is callback function



//  Arow functions

const multipleBy2 = (input) => {return input*2};

// so where the funciton is single explression to evaluate and then return, lets us remove the {} and return keyword

const multipleBy3 = (input) => input*3;
const outPut = multipleBy3(3) // 6


// We can even remove the parenthesis if there's only 1 parameter (expected input)

const multipleBy4 = input => input*4;

