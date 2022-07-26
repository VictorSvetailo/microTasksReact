import React from 'react';
import styles from './Students.module.css'

export type StudentDataTypeNew = {
    studentData: Array<StudentDataType>
    topCars: Array<TopCarsType>
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

export type TopCarsType = {
    id: number
    manufacturer: string
    model: string
    country: string
}


export const Students = (props: StudentDataTypeNew) => {
    return (
        <div>
            <h1>{props.titleData.title}</h1>
            <p>{props.titleData.subtitle}</p>
            <div>
                <table>
                    <tr>
                        {
                            props.topCars.map((c, index) => {
                                return <th key={c.id}>{c.manufacturer}</th>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            props.topCars.map((c, index) => {
                                return <td key={c.id}>{c.model}</td>

                            })
                        }
                    </tr>
                    <tr>
                        {
                            props.topCars.map((c, index) => {
                                return <td key={c.id}>{c.country}</td>
                            })
                        }
                    </tr>
                </table>
            </div>
            <ul>
                {
                    props.studentData.map((s, index) => {
                        return (
                            <div key={s.id} className={styles.items}>
                                <li className={styles.item}>{s.name}<span>{s.id}</span><span>{s.skill}</span>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    );
};
