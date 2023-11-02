//Checks if a value is an instance of a given class or superclass
const checkIfInstanceOf = (obj, classFunction) =>{
  if (obj == null || typeof classFunction !== 'function') return false;
  return Object(obj) instanceof classFunction;
}

//Test cases
// console.log(checkIfInstanceOf(new Date(), Date));
// console.log(checkIfInstanceOf(Date, Date));
// console.log(checkIfInstanceOf(5, Number));
