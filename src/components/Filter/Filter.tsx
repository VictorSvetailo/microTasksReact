import React, {useState} from 'react';
import styles from './Filter.module.css'
import {debug} from "util";


type FilterType = 'all' | 'RUBLS' | 'Dollars' | 'Victor'


export function Filter() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
        {banknots: 'Victor', value: 100, number: ' r1234567890'},
        {banknots: 'Victor', value: 50, number: ' x1234567890'},
        {banknots: 'Victor', value: 50, number: ' v1234567890'},
    ])


    const[filter, setFilter]=useState<FilterType>('all')


    let currentMoney = money;
    if (filter === 'RUBLS') {
        currentMoney = money.filter(d => d.banknots === 'RUBLS');
    }
    if (filter === "Dollars") {
       currentMoney = money.filter(d => d.banknots === 'Dollars')
    }
    if (filter === "Victor") {
        currentMoney = money.filter(d => d.banknots === 'Victor')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <div>
            <h2>Lesson Work</h2>
            <ul>
                {currentMoney.map((s, index) => {
                    return (
                        <li key={index}>
                            <span>{s.banknots}</span>
                            <span>{s.value}</span>
                            <span>{s.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilterHandler('all')} className={styles.btnAll}>All</button>
            <button onClick={() => onClickFilterHandler('RUBLS')} className={styles.btn}>₽</button>
            <button onClick={() => onClickFilterHandler('Dollars')} className={styles.btn}>$</button>
            <button onClick={() => onClickFilterHandler('Victor')} className={styles.btn}>Victor</button>
        </div>
    );
};

