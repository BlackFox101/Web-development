function isPrimeNumber(number) {
  isPrime = true
  if (!Array.isArray(number)) {
    if (Number.isInteger(number)) {
      if (number > 1) {
        for (let j = 2; j < number; j++) {
          if (number % j == 0) {
            isPrime = false;
            break;
          }
        }
      } else {
        isPrime = false;
      }

      if (isPrime) {
        console.log('The number ' + number + ' is prime');
      }
      else {
        console.log('The number ' + number + ' is not prime');
      }
    } else {
      console.log('Не верные данные!');
    }

  } else {

    for (let i = 0; i < number.length; i++) {
      isPrime = true;
      if (number[i] > 1) {
        for (let j = 2; j < number[i]; j++) {
          if (number[i] % j == 0) {
            isPrime = false;
            break
          }
        }

      } else {
        isPrime = false;
      }

      if (isPrime) {
        console.log('The number ' + number[i] + ' is prime');
      }
      else {
        console.log('The number ' + number[i] + ' is not prime');
      }
    }
  }
}