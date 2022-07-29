import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import styles from './App.module.css'

import {Students} from "./components/Students/Students";
import {Teachers} from "./components/Teacher/Teachers";

import {Hook} from "./components/Hook/Hook";
import {Filter} from "./components/Filter/Filter";
import {FilterTest} from "./components/Filter/FilterTest";
import Workout1 from "./components/Workout1/Workout1";
import {InputButton} from "./components/InputButton/InputButton";
import {Input} from "./components/Input/Input";
import {ButtonNew} from "./components/ButtonNew/ButtonNew";


function Button(props: { callBack: () => void, name: string }) {
    return null;
}

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
    // ButtonNew test Victor
    const ButtonTestSuper = (name: string, power: string, age: number,) => {
        console.log(name + power + age + "Ну что похерелись все! Глядя на то что я творю!!!!")
    }
    // InputButton
    //Title InputButton
    // const inputTitle = {
    //     title: 'Lesson InputButton'
    // }

    //InputButton data
    // let [message, setMessage] = useState([
    //     {message: 'message1'},
    //     {message: 'message2'},
    //     {message: 'message3'},
    //     {message: 'message3'},
    // ])
    // const addMessage=(title: string)=>{
    //     console.log(title + " - profit");
    //     let newMessage = {message: title};
    //     setMessage([newMessage, ...message]);
    //     // console.log("я делаю это")
    // }

    // single
    //input
    let [messageBT, setMessageBT] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message3'},
    ])

    let [titleBT, setTitle] = useState('')

    const addMessageBT=(title: string)=>{
        let newMessage = {message: title};
        setMessageBT([newMessage, ...messageBT]);
    }
    //button
    const callBackButtonHandler =()=> {
        addMessageBT(titleBT)
        setTitle('')
    }
//

    // const onClickButtonHandler = (event: MouseEventHandler<HTMLButtonElement>) => {
    //     console.log("я делаю это")
    //     console.log('Я сука это сделал - ')
    // }

    //Workout1
    const workout1Title = {
        title: 'My life'
    }
    const workout1Data = [
        {case: 'React', importance: 9, timeSpent: 1000, isDone: true},
        {case: 'JS', importance: 9, timeSpent: 1000, isDone: true},
        {case: 'TS', importance: 8, timeSpent: 100, isDone: true},
        {case: 'Woman', importance: 10, timeSpent: 100000000, isDone: true},
        {case: 'Car', importance: 7, timeSpent: 200, isDone: true},
        {case: 'House', importance: 6, timeSpent: 2000, isDone: false},
        {case: 'Work', importance: 10, timeSpent: 3000000, isDone: false},
    ]


    return (
        <div className={styles.App}>
            <ButtonNew callBackTB={callBackButtonHandler} name={'Add'}/>
            <Input setTitle={setTitle} title={titleBT}/>
            {
                messageBT.map((m)=>{
                    return(
                        <p>
                            {m.message}
                        </p>
                    )
                })
            }

            {/*<InputButton inputTitle={inputTitle} inputData={message} addMessage={addMessage}/>*/}

            <Workout1
                workout1Title={workout1Title}
                workout1Data={workout1Data}
            />
            <FilterTest/>
            <Filter/>
            <Hook/>
            <Button callBack={() => ButtonTestSuper('Victor', "10/10", 25)} name={'Im Victor Svetailo. Just do it'}/>
            {/*<ButtonNew name={'My firs Chanel #1'} callBack={()=>Button1Foo('Victor', 25, 'i love Masha')}/>*/}
            {/*<ButtonNew name={'My firs Chanel #2'} callBack={()=>Button2Foo('Masha', 24, 'хрен его знает')}/>*/}
            {/*<ButtonNew name={'Im stupid ButtonNew'} callBack={()=>Button3Foo('Im stupid ButtonNew very well')}/>*/}
            {/*<ButtonNew buttonData={buttonData}/>*/}
            {/*<ButtonNew buttonData={buttonData}/>*/}
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
