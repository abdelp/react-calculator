import PropType from 'prop-types';
import operate from './operate';

const calculate = (data, buttonName) => {
  if (data.total === 'ERROR' && buttonName !== 'AC') return;
  let dataUpdated = {...data};
  const prop = data.operator ? 'next' : 'total';

  if (buttonName.match(/\d/)) {
    dataUpdated[prop] = `${data[prop] || ''}`.replace(/^0[^\.]/, '') + buttonName;
  } else if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if(data.next) {
      dataUpdated = {
        total: operate(data.total, data.next, data.operator),
        next: null,
        operator: buttonName
      };
    } else if (data.total) {
      dataUpdated.operator = buttonName;
    }
  } else if (buttonName === '%') {
    if (!Number(data.next)) dataUpdated.next = 1;

    dataUpdated = {
      total: operate(dataUpdated.total, dataUpdated.next, buttonName),
      next: null,
      operator: buttonName
    };
  } else if (buttonName === '.') {
    if (dataUpdated[prop].indexOf('.') === -1) {
      dataUpdated[prop] = `${dataUpdated[prop]}.`;
    }
  } else if (buttonName === '=') {
    if (dataUpdated['next']) {
      dataUpdated = {
        total: operate(dataUpdated.total, dataUpdated.next, dataUpdated.operator)
      };
    }
    dataUpdated.operator = null;
    dataUpdated.next = null;
  } else if (buttonName === 'AC') {
    dataUpdated = {
      total: null,
      next: null,
      operator: null
    };
  }

  return dataUpdated;
};

calculate.propType = {
  data: {
    total: PropType.number,
    next: PropType.number,
    operation: PropType.string
  },
  buttonName: PropType.string.isRequired
};

export default calculate;