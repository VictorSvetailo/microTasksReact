import React, {ChangeEvent, MouseEvent, useState} from 'react';
import styles from './Workout1.module.css'
import {v1} from 'uuid';

type Workout1AllType = {
    workout1Title: Workout1TitleType
    workout1Data: Array<WorkoutDataType>
    onClickRemove: (id: string) => void
    addMessage: (title: string) => void
    // workoutFilter: Array<workoutFilterType>
}

type Workout1TitleType = {
    title: string
}

export type WorkoutDataType = {
    id: string,
    case: string,
    importance: number,
    timeSpent: number,
    isDone: boolean
}

// type workoutFilterType = {
//     importance: number,
// }


const Workout1 = (props: Workout1AllType) => {

    const [newMessageTitle, setNewMessageTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessageTitle(e.currentTarget.value)
    }
    const onClickAddHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.addMessage(newMessageTitle)
        setNewMessageTitle('')
    }

    const onclickFilterHandler = (name: string) => {
        setFilter(name)
    }

    let [filter, setFilter] = useState('importance')


    let workoutFilter = props.workout1Data
    if (filter === '#1') {
        workoutFilter = props.workout1Data.filter(m => m.isDone)
    }
    if (filter === '#2') {
        workoutFilter = props.workout1Data.filter(m => !m.isDone)
    }
    if (filter === 'all') {
        workoutFilter = props.workout1Data.filter(m => m)
    }


    return (
        <div className={styles.block}>
            <h2>{props.workout1Title.title}</h2>
            <div>
                <input value={newMessageTitle} onChange={onChangeHandler}/>
                <button onClick={onClickAddHandler}>Add</button>
                <ul>
                    {
                        workoutFilter.map((w) => {
                            const onClickRemoveHandler = () => {
                                props.onClickRemove(w.id)
                            }
                            return (
                                <div key={w.id}>
                                    <li>
                                        {w.case}
                                        {w.importance}
                                        {w.timeSpent}
                                    </li>
                                    <input type="checkbox" checked={w.isDone}/>
                                    <button onClick={onClickRemoveHandler}>Delete</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={() => onclickFilterHandler('all')}>All</button>
            <button onClick={() => onclickFilterHandler('#1')}>#1</button>
            <button onClick={() => onclickFilterHandler('#2')}>#2</button>
        </div>
    );
};

export default Workout1;