console.log("  printing odd numbers in array.   ");
console.log("1.Using Anonymous function");
var result = function(arr) {
    var arr1 = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2!==0) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(result([1, 2, 3, 4, 5]));

console.log("2.using immediate invoke function expression");
(function(arr){
    var arr1 = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2!==0) {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1)
})([1, 2, 3, 4, 5]);


console.log("   sum of elements in array   ");
console.log("1.Using Anonymous function.");
var result = function(arr) {
    var sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum = sum + arr[i]
    }
    return sum;
}
console.log(result([1, 2, 3, 4, 5]));

console.log("2.using immediate invoke function expresssion.");
(function(arr){
    var sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum = sum + arr[i];
    }
    console.log(sum)
})([1, 2, 3, 4, 5]);


console.log("     printing prime numbers in an array  ");
console.log("1.Using Anonymous function");
var result = function(arr) {
    var count = 0;
    var arr1 = [];
    for(var i=0;i<arr.length;i++) {
        count = 0;
        for(j=1;j<=arr[i];j++) {
            if(arr[i]%j===0) {
                count++;
            }
        }
        if(count==1||count==2) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(result([1, 2, 3, 4, 5]));

console.log("2.using immeddiate invoke function expression");

(function(arr){
    var count = 0;
    var arr1 = [];
    for(var i=0;i<arr.length;i++) {
        count = 0;
        for(j=1;j<=arr[i];j++) {
            if(arr[i]%j===0) {
                count++;
            }
        }
        if(count==1||count==2) {
            arr1.push(arr[i]);
        }
    }
   console.log(arr1);
})([1, 2, 3, 4, 5]);


console.log("     Convert all strings to titlecaps in a string of array.  ");
console.log("1.using Anonymous function.");
var result = function(arr) {
    var arr1 = [];
    for(i=0;i<arr.length;i++) {
        var r = "";
        var k = "";
        r = arr[i];
       k = r.replace(r.charAt(0), (r.charAt(0)).toUpperCase());
       arr1.push(k);
    }
    return arr1;
}
console.log(result(["apple", "Dog", "Cat", "lol", "red"]));


console.log("2.using immediate invoke function expression.");
(function(arr){
    var arr1 = [];
    for(i=0;i<arr.length;i++) {
        var r = "";
        var k = "";
        r = arr[i];
       k = r.replace(r.charAt(0), (r.charAt(0)).toUpperCase());
       arr1.push(k);
    }
   console.log(arr1);
})(["apple", "Dog", "Cat", "lol", "red"]);



console.log("     return all palindromes in an array    ");
console.log("1.using Anonymous functions");
var result = function(arr) {
    var arr1 = [];
    var count = 0;
    for(i=0;i<arr.length;i++) {
        var r = "";
        r = arr[i];
        count=0;
        for(j=0;j< r.length;j++) {
            if(r[j]!==r[(r.length-1)-j]) {
                count++;
            }
        }
        if(count===0) {
            arr1.push(r);
        }
    }
    return arr1;
}
console.log(result(["apple", "mom", "Cat", "lol", "red"]));


console.log("2.using iife function");
(function(arr) {
    var arr1 = [];
    var count = 0;
    for(i=0;i<arr.length;i++) {
        var r = "";
        r = arr[i];
        count=0;
        for(j=0;j<r.length;j++) {
            if(r[j]!==r[(r.length-1)-j]) {
                count++;
            }
        }
        if(count===0) {
            arr1.push(r);
        }
    }
   console.log(arr1);
}) (["apple", "mom", "Cat", "lol", "red"]);



console.log("    finding median for two sorted arrays of same length    ");  
console.log("1.using Anonymous function");
var result = function(arr1,arr2) {
    var arr = [];
    var k = 0;
    arr = arr1.concat(arr2);
    arr.sort(function(a, b){return a-b});
    if(arr.length%2===0) {
         o = parseInt(arr.length/2);
        j = o+1;
        k = (arr[o]+arr[j])/2;
    }
    else {
        k = arr[Math.ceil(arr.length/2)-1];
    }
    return k;
}
console.log(result([1, 2, 3, 4, 5],[6, 7, 8, 9, 10]));


console.log("2.using iife");
(function(arr1,arr2) {
    var arr = [];
    var k = 0;
    arr = arr1.concat(arr2);
    arr.sort();
    if(arr.length%2===0) {
         o = parseInt(arr.length/2);
        j = o+1;
        k = (arr[o]+arr[j])/2;
    }
    else {
        k = arr[Math.ceil(arr.length/2)-1];
    }
   console.log(k);
}) ([1, 2, 3, 4, 5],[6, 7, 8, 9, 10]);


console.log("  remove duplicates from an array.  ");
console.log("1.using anonymous function");
var result = function(arr1) {
    var arr = [];
    var count1 = 0;
    var count=0;
    var z = 0;
   for(i=0;i<arr1.length;i++) {
       count=0;
       count1 = 0;
       for(j=0;j<arr1.length;j++) {
           if(arr1[i]===arr1[j]) {
               count++;
           }
       }
       if(count==1) {
           arr.push(arr1[i]);
       }
       else {
           for(z=0;z<arr.length;z++) {
                if(arr[z]!=arr1[i]) {
                    count1++;
                }
           }
           if(count1==arr.length) {
               arr.push(arr1[i]);
           }
       }
   }
   return arr;
}
console.log(result([1, 2, 3, 4, 5, 5, 8, 2]));


console.log("2.using iife"); 

(function(arr1) {
    var arr = [];
    var count1 = 0;
    var count=0;
    var z = 0;
   for(i=0;i<arr1.length;i++) {
       count=0;
       count1 = 0;
       for(j=0;j<arr1.length;j++) {
           if(arr1[i]===arr1[j]) {
               count++;
           }
       }
       if(count==1) {
           arr.push(arr1[i]);
       }
       else {
           for(z=0;z<arr.length;z++) {
                if(arr[z]!=arr1[i]) {
                    count1++;
                }
           }
           if(count1==arr.length) {
               arr.push(arr1[i]);
           }
       }
   }
   console.log(arr)
    
}) ([1, 2, 3, 4, 5, 5, 8, 2]);


console.log("   rotate an array by k times and return an array   ")
console.log("1.Using Anonymous array");
var result = function(arr1,k) {
    var arr = [];
    var t = 0;
    if(k>arr1.length) {
        t = k%arr1.length;
    }
    else {
        t = k;
    }
    for(i=arr1.length-t;i<arr1.length;i++) {
        arr.push(arr1[i]);
    }
     for(j=0;j<arr1.length-t;j++) {
        arr.push(arr1[j]);
    }
   return arr;
}
console.log(result([1, 2, 3, 4, 5, 6, 7],2));


console.log("2.Using iife");

(function(arr1,k) {
    var arr = [];
    var t = 0;
    if(k>arr1.length) {
        t = k%arr1.length;
    }
    else {
        t = k;
    }
    for(i=arr1.length-t;i<arr1.length;i++) {
        arr.push(arr1[i]);
    }
     for(j=0;j<arr1.length-t;j++) {
        arr.push(arr1[j]);
    }
   console.log(arr)
}) ([1, 2, 3, 4, 5, 6, 7], 2);
