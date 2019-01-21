/*================
******Homework on Functions****
 
Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.


If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.
==================*/

// Define a function constructor 
function IsMortal (name){
  this.name=name,
  this.mortal=true,
  this.display=function(name){
  if (this.mortal ){
  return true;
  }else{
    return false;
  }
// Convert name that is not a string to string
 if (this.name !== 'string'){this.name = String(this.name);}
  }
  }
  
  // Create an instance of IsMortal with a new name
  let socrates = new IsMortal('Socrates');
  console.log(socrates.display());  // Output: true
  
  let john = new IsMortal(123);
  console.log(john.display());

  
  // Define an array of cake types.
  const cakes = ['vanilla', 'chocolate'];
  
  
  // Define a function expression for cake types. 
  const cakeType = (types, isCho) => {
  if(isCho){
  console.log('The cake is ' + types[1]);

        }else if (!isCho){
          console.log('The cake is ' + types[0]);  
        }
  }
  
  // if cake is chocolate
  cakeType(cakes, true); //Output: The cake is vanilla

   // if cake is not chocolate
  cakeType(cakes, false); //Output: The cake is vanilla

