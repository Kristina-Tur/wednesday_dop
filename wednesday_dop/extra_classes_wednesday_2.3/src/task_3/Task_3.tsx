import {ChangeEvent, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log('Task_3')
      return (
          setValue(event.currentTarget.value)
      )
}

  return (
    <div>
      <div>Lags when change value</div>
      <input type="text" value={value} onChange={onChange} />
      <SlowComponent />
    </div>
  );
};
