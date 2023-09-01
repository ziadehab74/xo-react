import React from 'react'
import Xicon from '../icons/Xicon'

function Win() {
    return (
        <div className='score'>

            <p>you win!</p>
            <h3>{""}<Xicon />Takes the round{""}</h3>
            <div className='score__btns'>
                <button className='btn btn-sm btn-light'>quit</button>
                <button className='btn btn-sm btn-yellow'>next round</button>
            </div>
        </div>
    )
}

export default Win