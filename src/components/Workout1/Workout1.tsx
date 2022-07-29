import React, {useState} from 'react';
import styles from './Workout1.module.css'

type Workout1Type = {
    workout1Title: Workout1TitleType
    workout1Data: Array<WorkoutDataType>
    // workoutFilter: Array<workoutFilterType>
}

type Workout1TitleType = {
    title: string
}

type WorkoutDataType = {
    case: string,
    importance: number,
    timeSpent: number,
    isDone: boolean
}

// type workoutFilterType = {
//     importance: number,
// }


const Workout1 = (props: Workout1Type) => {

    const onclickFilterHandler = (name: string) => {
        setFilter(name)
    }

    let [filter, setFilter] = useState('importance')


    let workoutFilter = props.workout1Data
    if(filter === '#1'){
        workoutFilter = props.workout1Data.filter(m => m.importance === 9)
    }
    if(filter === '#2'){
        workoutFilter = props.workout1Data.filter(m => m.importance === 8)
    }
    if(filter === '#3'){
        workoutFilter = props.workout1Data.filter(m => m.importance === 7)
    }
    if(filter === 'all'){
        workoutFilter = props.workout1Data.filter(m => m.importance)
    }



    return (
        <div className={styles.block}>
            <h2>{props.workout1Title.title}</h2>
            <div>
                <ul>
                    {
                        workoutFilter.map((w, index) => {
                            return (
                                <li key={index}>
                                    {w.case}
                                    {w.importance}
                                    {w.timeSpent}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={()=>onclickFilterHandler('all')}>All</button>
            <button onClick={()=>onclickFilterHandler('#1')}>#1</button>
            <button onClick={()=>onclickFilterHandler('#2')}>#2</button>
            <button onClick={()=>onclickFilterHandler('#3')}>#3</button>
        </div>
    );
};

export default Workout1;