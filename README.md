## Illustration;

![art2 img_page-0001](https://github.com/user-attachments/assets/c58ede21-84bf-4802-b7e8-2d175835e713)
<br>
<br>

## Overview 
This repo can be cloned and used to create dynamic range checks with nested functions which can then be used to test numbers against the range.
<br>
<br>

In this article, I broke the code into several parts with an illustration to enhance your understanding. 
<br>
<br>

## Code Snippet;
```
function range(min, max){   //outer function for defining the range
    return function(input){   //inner function for checking if the 'input' is within the range 
        return input>min && input<max;
    }
}

let isChild = range(0, 18)   //storing the inner function in a variable when the outer function is called
isChild(5)   //-----> true
```
<br>
