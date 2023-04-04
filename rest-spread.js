/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

/* Refactor code above in ES2015 */


const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

/* Filtering Even Numbers */

function findMin(...args) {
    return Math.min(...args);
    console.log(findMin(1,4,12,-3)); // Output: -3
    console.log(findMin(1,-1)); // Output: -1
    console.log(findMin(3,1)); // Output: 1
  }


  /*Merging Objects */

  function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
  }

  /* Doubling Array Values */

  function doubleAndReturnArgs(arr, ...args) {
    const result = [...arr];
    args.forEach(arg => result.push(arg * 2));
    return result;
  }

doubleAndReturnArgs([1,2,3],4,4); // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4); // [2,20,8]
doubleAndReturnArgs([], 1, 2, 3); // [2,4,6]
doubleAndReturnArgs(['hello'], 'world'); // ['hello', 'worldworld']

/* Slice & Dice */

// Remove a random element in the items array and return a new array without that item.
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  }
  
  // Return a new array with every item in array1 and array2.
  const extend = (array1, array2) => [...array1, ...array2];
  
  // Return a new object with all the keys and values from obj and a new key/value pair.
  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
  
  // Return a new object with a key removed.
  // here we destructure object rest to remove key-value pair from object, assign '_' as a throwaway variable , then use 'rest' variable 
  // to collect the remaining key-value pairs in object
 
  const removeKey = (obj, key) => {
    const { [key]: _, ...rest } = obj;
    return rest;
  };
  
  // Combine two objects and return a new object.
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
  
  // Return a new object with a modified key and value.
  const update = (obj, key, val) => ({ ...obj, [key]: val });
  



  





  


