Create dynamic range checks with nested functions and write reusable code that sets min-max ranges and tests numbers against them.
<br>
<br>

In this article, I broke the code into several parts with an illustration to enhance your understanding. 
<br>
<br>

Code Snippet;
```
function range(min, max){   //outer function for defining the range
    return function(input){   //inner function for checking if the 'input' is within the range 
        return input>min && input<max;
    }
}

let isChild = range(0, 18)   //storing the inner function in a variable when the outer function is called
isChild(5)   //------> true```
