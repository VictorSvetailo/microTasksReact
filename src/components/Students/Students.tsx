import React from 'react';
import styles from './Students.module.css'

export type StudentDataTypeNew = {
    studentData: Array<StudentDataType>
    titleData: TitleDataType
}

export type StudentDataType = {
    id: number
    name: string
    age: number
    skill: string
}
export type TitleDataType = {
    title: string
    subtitle: string
}


export const Students = (props: StudentDataTypeNew) => {
    return (
        <div>
            <h1>{props.titleData.title}</h1>
            <p>{props.titleData.subtitle}</p>
            <ul>
                {
                    props.studentData.map((t) => {
                        return (
                            <div className={styles.items}>
                                <li className={styles.item} key={t.id}>{t.name}<span>{t.id}</span><span>{t.skill}</span>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};
