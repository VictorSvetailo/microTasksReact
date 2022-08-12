import React, {useState} from 'react';

const Counter = () => {

    let [number, setNumber] = useState(1)

    const onClickPlusHandler =()=>{
        ++number
        setNumber(number)
    }
    const onClickMinusHandler =()=>{
        if (number > 0){
            --number
            setNumber(number)
        }
    }
    const onClickZeroHandler =()=>{
        number = 0
        setNumber(number)
    }

    return (
        <div>
        <h1>Counter</h1>
            <div>{number}</div>
            <br/>
            <button onClick={onClickPlusHandler}>Plus 1</button>
            <button onClick={onClickMinusHandler}>Minus 1</button>
            <button onClick={onClickZeroHandler}>Zero</button>
            <br/>
            <hr/>
        </div>
    );
};

export default Counter;