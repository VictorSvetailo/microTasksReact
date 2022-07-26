import React from 'react';
import styles from './Button.module.css'



type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = ()=>{
        props.callBack()
    }


    return (
        <div className={styles.backgraund__button}>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};







// type ButtonType = {
//     name: string
//     callBack: () => void
// }




// export const Button = (props: ButtonType) => {
//
//     const onClickHandler = () => {
//         props.callBack()
//     }
//
//     return (
//         <div className={styles.backgraund__button}>
//                 <button onClick={onClickHandler} className={styles.btn1}>{props.name}</button>
//         </div>
//     );
// };

