function fibs(num) {
  if (num === 0)
    return []
  if (num === 1)
    return [0]
  let array = [0, 1]
  for (let i = 2; i < num; i++) {
    let nextNum = array[i - 1] + array[i - 2]
    array.push(nextNum)
  }
  return array
}

console.log(fibs(8))

function fibsRec(num, array = [0, 1]) {
  console.log('This was printed recursively')
  if (num <= array.length)
  return array.slice(0, num)
  let nextNum = array[array.length - 1] + array[array.length - 2]
  array.push(nextNum)
  return fibsRec(num, array)
}

console.log(fibsRec(8))