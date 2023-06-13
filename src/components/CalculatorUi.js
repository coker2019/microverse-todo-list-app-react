import { useState } from 'react';
import Display from './Display';
import Button from './Button';

const CalculatorUi = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="calculator-container">
      <Display obj={obj} />
      <Button value="AC" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="+/-" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="%" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="÷" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="7" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="8" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="9" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="x" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="4" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="5" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="6" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="-" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="1" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="2" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="3" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="+" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button
        value="0"
        classList="button bg-1 zero-btn"
        setObj={setObj}
        obj={obj}
      />
      <Button value="." classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="=" classList="button bg-2" setObj={setObj} obj={obj} />
    </div>
  );
};

export default CalculatorUi;
