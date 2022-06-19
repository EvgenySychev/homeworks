import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${get2digitsString(date.getHours())}:${get2digitsString(date.getMinutes())}:${get2digitsString(date.getSeconds())}` // date?.tiLocalTimeString()
    const stringDate = `${get2digitsString(date.getDate())}.${get2digitsString(date.getMonth())}.${date.getFullYear()}` // date?.tiLocalDateString()

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? <div> {stringDate} </div> : <br/>}



            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
