function range(min, max){   //outer function for defining the range
    return function(input){   //inner function for checking if the 'input' is within the range 
        return input>min && input<max;
    }
}

let isChild = range(0, 18)   //storing the inner function in a variable when the outer function is called
isChild(5)   //------> true