import React, {useState} from 'react';
import styles from './FilterTest.module.css'


type CarType = 'Subaru' | 'Lexus' | 'Toyota' | 'All';

export function FilterTest() {
    const car = [
        {model: 'Subaru', value: 100, number: ' a1234567890'},
        {model: 'Subaru', value: 50, number: ' z1234567890'},
        {model: 'Lexus', value: 100, number: ' w1234567890'},
        {model: 'Subaru', value: 100, number: ' e1234567890'},
        {model: 'Toyota', value: 50, number: ' x1234567890'},
        {model: 'Subaru', value: 50, number: ' c1234567890'},
        {model: 'Lexus', value: 100, number: ' r1234567890'},
        {model: 'Subaru', value: 50, number: ' x1234567890'},
        {model: 'Lexus', value: 50, number: ' v1234567890'},
        {model: 'Toyota', value: 100, number: ' r1234567890'},
        {model: 'Toyota', value: 50, number: ' v1234567890'},
    ]

    let [filter, setFilter] = useState<CarType>('All')
    let carFilter = car
    if(filter === 'Subaru'){
        carFilter = car.filter(m => m.model === 'Subaru')
    }
    if(filter === 'Lexus'){
        carFilter = car.filter(m => m.model === 'Lexus')
    }
    if(filter === 'Toyota'){
        carFilter = car.filter(m => m.model === 'Toyota')
    }

    const onclickFilterHandler = (name: CarType) => {
        setFilter(name)
        console.log(name)
    }

    return (
        <div>
            <h2>My work</h2>
            <ul>
                {
                    carFilter.map((c, index) => {
                        return (
                            <li key={index}>
                                <span>{c.model}</span>
                                <span>{c.value}</span>
                                <span>{c.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => onclickFilterHandler('All')} className={styles.btnAll}>All</button>
            <button onClick={() => onclickFilterHandler('Subaru')} className={styles.btn}>Subaru</button>
            <button onClick={() => onclickFilterHandler('Lexus')} className={styles.btn}>Lexus</button>
            <button onClick={() => onclickFilterHandler('Toyota')} className={styles.btn}>Toyota</button>
        </div>
    );
};

