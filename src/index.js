module.exports = function getZerosCount(number, base) {
  const findPrimes = (num) => {
    const numberSet = [...Array(num + 1).keys()];

    for (let i = 2; i < num; i += 1) {
      if (numberSet[i]) {
        for (let j = i ** 2; j <= num; j += i) {
          if (numberSet[j]) {
            numberSet[j] = 0;
          }
        }
      }
    }

    return numberSet.filter(value => value > 1 && num % value === 0);
  };

  const basePrimes = findPrimes(base);

  const basePrimesCount = basePrimes.map((prime) => {
    let power = 0;
    let temp = base;

    while (temp % prime === 0) {
      power += 1;
      temp = Math.floor(temp / prime);
    }

    return [prime, power];
  });

  const primesInFactorial = basePrimesCount.map((primeWithPower) => {
    const [prime, power] = primeWithPower;
    let counter = 0;

    for (let i = 1; prime ** i <= number; i += 1) {
      counter += Math.floor(number / (prime ** i));
    }

    return Math.floor(counter / power);
  });

  return Math.min(...primesInFactorial);
};
