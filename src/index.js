module.exports = function getZerosCount(number, base) {
  const primes = (numbase) => {
    const basePrime = [];
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
      37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
      103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
      167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251];

    for (let i = 53; i >= 0; i -= 1) {
      if (numbase % primeNumbers[i] === 0) {
        basePrime.push(primeNumbers[i]);
      }
    }

    let powerCount;
    let temp;

    for (let j = 0; j < basePrime.length; j += 1) {
      powerCount = 0;
      temp = base;

      while (temp % basePrime[j] === 0) {
        powerCount += 1;
        temp = Math.floor(temp / basePrime[j]);
      }

      basePrime[j] = [basePrime[j], powerCount];
    }

    return basePrime;
  };

  const baseNumArr = primes(base);
  const countNumsArr = [];

  for (let j = 0; j < baseNumArr.length; j += 1) {
    const baseNum = baseNumArr[j][0];
    let countNums = 0;

    for (let i = 1; baseNum ** i <= number; i += 1) {
      countNums += Math.floor(number / (baseNum ** i));
    }
    countNumsArr[j] = Math.floor(countNums / baseNumArr[j][1]);
  }

  countNumsArr.sort((a, b) => a - b);

  return countNumsArr[0];
};
