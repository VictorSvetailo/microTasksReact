import React from 'react';

import styles from './Teachers.module.css'

type MainTeachersType = {
    titleTeachers: TitleTeachersType
    teachersData: Array<ListTeachersType>
}


type TitleTeachersType = {
    title: string
}

type ListTeachersType = {
    id: number
    name: string
    lastName: string
    age: number
    married: boolean

}


export const Teachers = (props: MainTeachersType) => {
    return (
        <div>
            <h2 className={styles.title}>{props.titleTeachers.title}</h2>
            <div>
                {
                    props.teachersData.map((t)=>{
                        return(
                            <li key={t.id}><span>{t.name}</span> <span>{t.lastName}</span> <span>{t.id}</span> <span>{t.age}</span>
                                <input type="checkbox" checked={t.married}/></li>
                        )
                    })
                }
            </div>
        </div>
    );
};

