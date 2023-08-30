import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

import React from 'react'

const start = () => {
    return <div className='start'>
        <div className='start__header'>
            <Xicon />
            <Oicon/>
        </div>
        <div className='card shadow-gray'>
            <h1 className='text-lg'> pick player 1'st mark</h1>
            <div className='start__players'>
                <span className='start__players--active'>
                    <Xicon color="dark"/>
                </span>
                <span className=''>
                    <Oicon color="light"/>
                </span>
            </div>
            <p className='text-light'>remember :x goes first</p>
        </div>
        <div className='start__btns'>
<button className='btn btn-yellow'>new game (vs CPU)</button>
<button className='btn btn-blue'>new game (vs player)</button>

        </div>
    </div>

}

export default start
