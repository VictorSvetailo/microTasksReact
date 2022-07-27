import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import styles from './App.module.css'

import {Students} from "./components/Students/Students";
import {Teachers} from "./components/Teacher/Teachers";
import {Button} from "./components/Button/Button";
import {Hook} from "./components/Hook/Hook";
import {Filter} from "./components/Filter/Filter";
import {FilterTest} from "./components/Filter/FilterTest";


function App() {
    // Students
    const titleData = {title: 'This is my JOB', subtitle: 'I like React and JS'}
    const studentData = [
        {id: 1, name: 'Sergei Smirnov', age: 31, skill: 'Python'},
        {id: 2, name: 'Logan Rassomaha', age: 27, skill: 'JS'},
        {id: 3, name: 'Alex Andrs', age: 25, skill: 'Ruby'},
        {id: 4, name: 'Mia Torreto', age: 49, skill: 'C++'},
    ]
    // Teachers
    const titleTeachers = {
        title: 'We are the best teachers'
    }
    const teachersData = [
        {id: 1, name: 'Robert', lastName: 'De Niro', age: 65, married: true},
        {id: 2, name: 'Angelina', lastName: 'Jolie', age: 39, married: true},
        {id: 3, name: 'Johnny', lastName: 'Depp', age: 57, married: false},
        {id: 4, name: 'Kate', lastName: 'Winslet', age: 41, married: false},
        {id: 5, name: 'Leonardo', lastName: 'DiCaprio', age: 43, married: true},
        {id: 6, name: 'Marlon', lastName: 'Brando', age: 75, married: false},
    ]
    // Car
    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs', country: 'Germany'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s', country: 'Germany'},
        {id: 3, manufacturer: 'Audi', model: 'rs6', country: 'Germany'},
    ]
    // Button test Victor
    const ButtonTestSuper = (name: string, power: string, age: number,) => {
        console.log(name + power + age + "Ну что похерелись все! Глядя на то что я творю!!!!")
    }
    // Filter


    return (
        <div className={styles.App}>
            <FilterTest/>
            <Filter/>
            <Hook/>
            <Button callBack={() => ButtonTestSuper('Victor', "10/10", 25)} name={'Im Victor Svetailo. Just do it'}/>
            {/*<Button name={'My firs Chanel #1'} callBack={()=>Button1Foo('Victor', 25, 'i love Masha')}/>*/}
            {/*<Button name={'My firs Chanel #2'} callBack={()=>Button2Foo('Masha', 24, 'хрен его знает')}/>*/}
            {/*<Button name={'Im stupid Button'} callBack={()=>Button3Foo('Im stupid Button very well')}/>*/}
            {/*<Button buttonData={buttonData}/>*/}
            {/*<Button buttonData={buttonData}/>*/}
            <Students
                titleData={titleData}
                studentData={studentData}
                topCars={topCars}
            />
            <Teachers
                titleTeachers={titleTeachers}
                teachersData={teachersData}
            />

        </div>
    );
}

export default App;
