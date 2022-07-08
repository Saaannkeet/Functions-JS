
//que1:: creat a function with zero parameter having console statement 
 function creat(){
    console.log ("SK");
 }
 creat();


//que2:: creat a function which take two value of parameter and print the su of 
// them as "Sum of 3 , 4 is 7"

function add(a,b){
    let sum =(a+b);
    console.log (sum);
 }
 add(3,4);

//que3:: creat a arrow function.
let arrow = () => console.log('Hello');
arrow();

// que4::Print output::

var x = 21;
var girl = function (){
    console.log(x);
    var x = 20;
};
girl()
// output::undefined



// que5::Print output::
var x = 21;
 girl();
console.log(x);
 function girl(){
  console.log(x);
   var x = 20;
};

// output::undefined
//         21


// que6::Print output::
var x = 21;
a();
b();
console.log(a);
a=function(){
  x = 20;  
   console.log(x);
};
b=function(){
    x=40;
    console.log(x);
};

// output::
// ReferenceError: a is not defined


// write a function that except all parameter n and returns factorial of n 



