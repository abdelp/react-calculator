import PropType from 'prop-types';
import operate from './operate';

const calculate = (data, buttonName) => {
  let dataUpdated = {...data};
  const prop = data.operator ? 'next' : 'total';

  if (buttonName.match(/\d/)) {
    dataUpdated[prop] = (Number(data[prop]) || '') + buttonName;
  } else if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if(Number(data['next'])) {
      dataUpdated = {
        total: operate(data.total, data.next, data.operator),
        next: null,
        operator: buttonName,
        buttonName: null
      };
    } else {
      dataUpdated.operator = buttonName;
    }
  }
  // } else if (buttonName === '%') {
  //   if (!next && next !== 0) next = 1;
  //   total = operate(total, next, buttontName);
  //   next = null;
  //   operation = null;
  // } else if (buttontName === '.') {
  //   if (next) {
  //     next = `${next}.`;
  //   } else {
  //     next = `${total}.`;
  //   }
  //   operation = null;
  // } else if (buttontName === '=') {
  //   if (total && next && operation) {
  //     total = operate(total, next, operation);
  //   }
  //   operation = null;
  //   next = null;
  // } button == 'AC'


  return dataUpdated;
};

calculate.propType = {
  data: {total: PropType.number,
  next: PropType.number,
  operation: PropType.string},
  buttonName: PropType.string.isRequired
};

export default calculate;