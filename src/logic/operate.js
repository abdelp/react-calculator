import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  try {
    numberOne = Big(numberOne);
    numberTwo = Big(numberTwo);

    const operators = {
      '+': numberOne.plus.bind(numberOne),
      '-': numberOne.minus.bind(numberOne),
      'X': numberOne.times.bind(numberOne),
      '÷': numberOne.div.bind(numberOne),
      '%': (numberTwo) => numberOne.times(numberTwo) / 100
    };

    const result = operators[operation](numberTwo);

    return Number(result);
  } catch(e) {
    return 'ERROR';
  }
};

export default operate;