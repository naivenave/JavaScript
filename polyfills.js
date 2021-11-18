// Polyfill for Map

// Polyfill for map function

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

   
// Polyfill for map function

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

