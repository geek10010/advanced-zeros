module.exports = function getZerosCount(number, base) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
    37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
    167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
    233, 239, 241, 251];

  const basePrimes = primes.filter(prime => base % prime === 0);

  const basePrimesCount = basePrimes.map((prime) => {
    let power = 0;
    let temp = base;

    while (temp % prime === 0) {
      power += 1;
      temp = Math.floor(temp / prime);
    }

    return [prime, power];
  });

  const primesInFactorial = basePrimesCount.map((element) => {
    const [prime, power] = element;
    let counter = 0;

    for (let i = 1; prime ** i <= number; i += 1) {
      counter += Math.floor(number / (prime ** i));
    }

    return Math.floor(counter / power);
  });

  return Math.min(...primesInFactorial);
};
