function firstFunction(a){
    secondFunction();
    console.log("First function called");
  }
  
  function secondFunction(a){
    thirdFunction();
    console.log("Second function called");
  }
  
  function thirdFunction(a){
    console.log("Third function called");
  }
  
 firstFunction();

  