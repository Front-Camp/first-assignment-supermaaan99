/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  for(let i=0;i<arr.length;i++){
    let newarr=[]
    if(arr[i]+arr[i+1]===base){
      newarr.push(arr[i]);
      newarr.push(arr[i+1]);
      return newarr;
    }
    else{
      return "error";
    }
  }
};

export default twoSums;
