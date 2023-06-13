/* eslint-disable */

import calculate from './logic/calculate';

const Button = ({
  obj, setObj, value, classList,
}) => {
  const handleInput = (e) => {
    setObj(calculate(obj, e.target.innerText));
  };

  return (
    <button
      type="button"
      className={classList}
      onClick={(e) => {
        handleInput(e);
      }}
    >
      {value}
    </button>
  );
};

export default Button;
