import PropType from 'prop-types';
import operate from './operate';

const removeLeadingZero = amount => `${amount || ''}`.replace(/^0$/, '');

const resetedData = () => ({ total: null, next: null, operation: null });

const calculate = (data, buttonName) => {
  if (data.total === 'ERROR' && !buttonName.match(/\d/)) return data;

  let dataUpdated = { ...data };
  if (dataUpdated.total === 'ERROR') dataUpdated = resetedData();

  const prop = data.operation ? 'next' : 'total';

  if (buttonName.match(/\d/)) {
    dataUpdated[prop] = removeLeadingZero(dataUpdated[prop]) + buttonName;
  } else if (['+', '-', 'X', '÷', '%'].includes(buttonName)) {
    if (data.next) {
      dataUpdated = {
        total: operate(data.total, data.next, data.operation),
        next: null,
        operation: null,
      };
    } else if (data.total) {
      dataUpdated.operation = buttonName;
    }
  } else if (buttonName === '.') {
    if (!dataUpdated[prop]) dataUpdated[prop] = '0';
    if (dataUpdated[prop].indexOf('.') === -1) { dataUpdated[prop] = `${dataUpdated[prop]}.`; }
  } else if (buttonName === '=') {
    if (dataUpdated.next || dataUpdated.operation === '%') {
      dataUpdated = {
        total: operate(dataUpdated.total, dataUpdated.next || 1, dataUpdated.operation),
      };
    }

    dataUpdated.operation = null;
    dataUpdated.next = null;
  } else if (buttonName === '+/-') {
    if (dataUpdated[prop]) dataUpdated[prop] = operate(dataUpdated[prop], -1, 'X');
  } else if (buttonName === 'AC') {
    dataUpdated = resetedData();
  }

  return dataUpdated;
};

calculate.propType = {
  data: {
    total: PropType.number,
    next: PropType.number,
    operation: PropType.string,
  },
  buttonName: PropType.string.isRequired,
};

export default calculate;
