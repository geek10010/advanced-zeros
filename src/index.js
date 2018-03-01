module.exports = function getZerosCount(number, base) {
  // your implementation
  function primes(base) {
  let basePrime = [];
  let primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];
  for (let i=53; i>=0; i--) {
    if (base % primeNumbers[i] === 0) {
      basePrime.push(primeNumbers[i]);
      //break;
    }
  }
  //
  //console.log(`base: ${base}   \t basePrime: ${basePrime}`);
  return basePrime;
  }
  
  let baseNum;
  let baseNumArr = primes(base);
  let countNums;
  let countNumsArr = [];
  //let powerNum = Math.floor(Math.log(number) / Math.log(baseNum));
  //
  //console.log(`number: ${number}   \t powerNum: ${powerNum}`);
  //console.log(`baseNumArr: ${baseNumArr}`);
  for (let j=0; j<baseNumArr.length; j++) {
    baseNum = baseNumArr[j];
    countNums = 0;
    for (let i=1; baseNum**i<=number; i++) {
      //
//      console.log(`${baseNum}**${i}: ${baseNum**i}   \t = ${Math.floor(number / baseNum ** i)}`);
      countNums += Math.floor(number / baseNum ** i);
    }
    //console.log(`baseNum: ${baseNum}`);
    countNumsArr[j] = countNums;
  }
  let result = countNumsArr.sort((a, b) => a - b)[0]
  //console.log(`countNumsArr: ${countNumsArr} \t result: ${result}`);
  return result;
}
