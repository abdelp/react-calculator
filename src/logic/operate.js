import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  try {
    const bigOne = Big(numberOne);
    const bigTwo = Big(numberTwo);

    const operators = {
      '+': bigOne.plus.bind(bigOne),
      '-': bigOne.minus.bind(bigOne),
      X: bigOne.times.bind(bigOne),
      '÷': bigOne.div.bind(bigOne),
      '%': bigTwo => bigOne.times(bigTwo) / 100,
    };

    const result = operators[operation](bigTwo);

    return Number(result);
  } catch (e) {
    return 'ERROR';
  }
};

export default operate;
