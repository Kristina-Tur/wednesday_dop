import React, {ChangeEvent, memo, useCallback, useRef, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

/*
//composition optimization
export const Task_3 = () => {
  return (
    <div>
      <div>Lags when change value</div>
      <Input/>
      <SlowComponent />
    </div>
  );
}
export const Input = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Task_3')
        return (
            setValue(event.currentTarget.value)
        )
    }
    return <input type="text" value={value} onChange={onChange}/>
}*/

/*
//children
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
            <input type="text" value={value} onChange={onChange}/>
            <SlowComponentWrapper>
                <SlowComponent/>
            </SlowComponentWrapper>

        </div>
    );
}
type SlowComponentWrapperType = {
    children: React.ReactNode
}

const SlowComponentWrapperMemo = memo(({ children }: SlowComponentWrapperType) => {
    console.log('SlowComponentWrapper re-render...');
    return (
        <>
            {children}
        </>
    )
});

export const SlowComponentWrapper = (props: SlowComponentWrapperType) => {
    return <SlowComponentWrapperMemo {...props} />;
};*/
/*export const Task_3 = () => {
    let Iref = useRef<HTMLInputElement>(null)
    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" ref={Iref}/>
            <SlowComponent/>
        </div>
    );
}*/
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
            <input type="text" value={value} onChange={onChange}/>
            <SlowComponent/>
        </div>
    );
}

