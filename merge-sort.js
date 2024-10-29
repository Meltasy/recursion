function mergeSort(array) {
  // Base case
  if (array.length < 2)
    return array
  // Split array in two
  let half = Math.ceil(array.length / 2)
  let leftArray = array.slice(0, half)
  let rightArray = array.slice(half)
  // Recursively split each half
  let newLeftArray = mergeSort(leftArray)
  let newRightArray= mergeSort(rightArray)
  console.log(leftArray, rightArray)
  // Merge and compare the two halves
  return merge(newLeftArray, newRightArray)
}

function merge(left, right) {
  let sortedArray = []
  let leftIdx = 0
  let rightIdx = 0
  console.log(left, right)
  // Merge and compare the two halves
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      sortedArray.push(left[leftIdx])
      leftIdx++
    } else {
      sortedArray.push(right[rightIdx])
      rightIdx++
    }
    console.log(sortedArray)  
  }
  // Join the main left and right arrays
  console.log(left, leftIdx, right, rightIdx)
  return sortedArray.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))