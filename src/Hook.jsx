import React, { useState } from 'react'
import Card from './components/Card'

function Hook() {
    let [counter, setCounter] = useState(15)

    const increment = () => {
        if(counter < 25){
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    const blogs = [
        {id: '1', title: 'Bootstrap', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '2', title: 'Tailwind', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '3', title: 'CSS', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '4', title: 'Laravel', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '5', title: 'Bootstrap', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '6', title: 'Tailwind', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '7', title: 'CSS', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
        {id: '8', title: 'Laravel', description: 'lorem lorem lorem', dateTime: {'date': '25:10:2025', 'time': '10:00 AM'}},
    ]

    return (
        <>
            <h1>Hook {counter}</h1>
            <button className='me-2' onClick={increment}>Increment {counter}</button>
            <button className=""
                onClick={decrement}>Deecrement {counter}</button>

            <div className="flex flex-wrap justify-center gap-4">
                {blogs.map((blod) => (
                    <Card key={blod.id} id={blod.id} title={blod.title} description={blod.description} dateTime={blod.dateTime} />
                ))}
            </div>
            
            <p>Footer {counter}</p>
        </>
    )
}

export default Hook