import {useState} from 'react'

function BgColorChange() {
    let  [bgName, setBgName] = useState('orange')

    const colorChange = (bgName) => {
        setBgName('bg-'+ bgName +'-500');
    }

    return (
        <>
            <nav className={`bg-${bgName}-500 w-full h-screen` }>
                <div className="flex flex-wrap justify-center gap-4 mt-3">
                    <button className="rounded-full bg-red-500 w-50" onClick={() => setBgName('red')} >Red</button>
                    <button className="rounded-full bg-green-500 w-50" onClick={() => setBgName('green')} >Green</button>
                    <button className="rounded-full bg-blue-500 w-50" onClick={() => setBgName('blue')} >Blue</button>
                    <button className="rounded-full bg-sky-500 w-50" onClick={() => setBgName('sky')} >Sky</button>
                    <button className="rounded-full bg-orange-500 w-50" onClick={() => setBgName('orange')} >Orange</button>
                    <button className="rounded-full bg-yellow-500 w-50" onClick={() => setBgName('yellow')} >Yellow</button>
                    <button className="rounded-full bg-lime-500 w-50" onClick={() => setBgName('lime')} >Lime</button>
                </div>
            </nav>
            <div className={bgName}>

            </div>
        </>
    )
}

export default BgColorChange