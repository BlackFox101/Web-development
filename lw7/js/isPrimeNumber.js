function isPrimeNumber(number) {
  let isPrime;
  if (!Array.isArray(number)) {
    if (Number.isInteger(number)) {
      check(number);

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
      if (Number.isInteger(number[i])) {
        isPrime = true;
        check(number[i]);

        if (isPrime) {
          console.log('The number ' + number[i] + ' is prime');
        }
        else {
          console.log('The number ' + number[i] + ' is not prime');
        }
      } else {
        console.log('Не верные данные!');
      }
    }
  }
}

function check(number) {
  if (number > 1) {
    for (let j = 2; j < number; j++) {
      isPrime = true;
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }
}
