// Polyfill for Map

const newMap=(array, cbfunction)=>{
  try{
    if(!Array.isArray(array)){
      throw "Please pass an array"
    }
    if(array.length<1){
      throw "Please pass non-empty array"
    }
  let newArray = [];
  for(let i=0;i<array.length;i++){
    newArray.push(cbfunction(array[i]))
  }
  return newArray;
  }catch(err){
    return (err)
  }
}

function multiply(x){
  return x*2;
}

console.log(newMap([1,2,3,4],multiply))  // Logs out [2,4,6,8]
console.log(newMap([],multiply))  // Logs out Please pass non-empty array
console.log(newMap("[1,2,3,4]",multiply))  // Logs out Please pass an array

   
// Polyfill for Filter

const newFilter=(array, cbfunction)=>{
  try{
    if(!Array.isArray(array)){
      throw "Please pass an array"
    }
    if(array.length<1){
      throw "Please pass non-empty array"
    }
  let newArray = [];
  for(let i=0;i<array.length;i++){
   if(cbfunction(array[i])){
    newArray.push(array[i])
  }
  }
  return newArray;
  }catch(err){
    return (err)
  }
}

function checkEven(x){
  return x%2===0;
}

console.log(newFilter([1,2,3,4],checkEven)) // In console logs out [ 2, 4 ]
console.log(newFilter([],checkEven)) // In console logs out Please pass non-empty array
console.log(newFilter("[1,2,3,4]",checkEven)) // In console logs out "Please pass an array"

// Polyfill for Reduce

const newReduce=(cbfunction, array, initial_value)=>{
  try{
    if(!Array.isArray(array)){
      throw "Please pass an array"
    }
    if(array.length<1){
      throw "Please pass non-empty array"
    }
  let final_answer = 0;
    if(initial_value){
      final_answer =initial_value    
    }
  for(let i=0;i<array.length;i++){
   final_answer = cbfunction(array[i], final_answer)
  }
  return final_answer;
  }catch(err){
    return (err)
  }
}

function reducer(x, y){
  return x+y;
}

console.log(newReduce(reducer, [1]))   // Logs out 1
console.log(newReduce(reducer, [1], 5))   // Logs out 6
console.log(newReduce(reducer, []))   // Logs out Please pass non-empty array
