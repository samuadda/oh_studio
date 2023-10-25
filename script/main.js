const arr1 = [9,5];
const arr2 = [6,7] ;

function mergeAndOrder(array1, array2) {
    // write your code here
    let result = [...array1,...array2];
    return result.sort();
}
console.log(mergeAndOrder(arr1 , arr2));