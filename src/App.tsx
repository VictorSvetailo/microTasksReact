import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Students} from "./components/Students/Students";
import {Teachers} from "./components/Teacher/Teachers";

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



    return (
        <div className="App">
            <Students
                titleData={titleData}
                studentData={studentData}
            />
            <Teachers
                titleTeachers={titleTeachers}
                teachersData={teachersData}
            />
        </div>
    );
}

export default App;
