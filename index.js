function hasTargetSum(array, target) {
//   loop through each number in the array
  for (let i =0; i < array.length; i++){
//   loop through the rest of the numbers
    for (let j = i + 1; j < array.length; j++){
//     if sum of the current pair equals the target
      if (array[i] + array[j] === target){
        return true;
      }
//       return true
    }
  }
  return false;
//  else return false   
  }
/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  loop through each number in the array
    loop through the rest of the numbers
      if sum of the current pair equals the target
        return true

   else return false     
*/

/*
  Add written explanation of your solution here
  Go through eeach number in the array to check if any 2 numbers add up to the target number.
  Then, return true if found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
