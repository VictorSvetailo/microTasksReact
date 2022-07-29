import React from 'react';

type ButtonPropsType = {
    name: string
    callBackTB: ()=>void
}


export const ButtonNew = (props: ButtonPropsType) => {



    const onClickButtonHandler = () => {
        props.callBackTB()
    }

    return (
        <span>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </span>
    );
};

