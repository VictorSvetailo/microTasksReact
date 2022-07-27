import React, {useState} from 'react';


export const Hook = () => {
    let [a, setA]=useState(1)
    const onClickHandler1 = () => {
        setA(++a)
        console.log((a))
    }
    const onClickHandler0 = () => {
        setA(a = 0)
        console.log((a))
    }
    // Сложение
    let [b, setB] =useState(1)
    const onClickHandler = ()=>{
        setB(++b)
    }





    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler1}>number</button>
            <button onClick={onClickHandler0}>0</button>
            <h2>Victor {b}</h2>
            <button onClick={onClickHandler}>+1</button>
        </div>
    );
};