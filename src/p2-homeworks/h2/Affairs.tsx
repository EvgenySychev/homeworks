import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback1: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback2={props.deleteAffairCallback1}
        />
    ))

    const setAll = () => {
    props.setFilter('all')
        console.log('this is button All')

    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
        console.log('this is button High')
    }
    const setMiddle = () => {
        props.setFilter('middle')
        console.log('this is button Middle')
    }
    const setLow = () => {
        props.setFilter('low')
        console.log('this is button Low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
