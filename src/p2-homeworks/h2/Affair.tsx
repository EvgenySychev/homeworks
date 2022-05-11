import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback2: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
props.deleteAffairCallback2(props.affair._id)
        console.log('this is button X')
    }

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            {props.affair.name}  {props.affair.priority}

        </div>
    )
}

export default Affair
