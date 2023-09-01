import React from 'react'

function restart() {
  return (
    <div className='Restart'>
        <div className='restart__index'>
    <h3>Restart  game ?</h3>
    </div>
    <div className='score__btns'>
        <button className='btn btn-sm btn-light'>No ,cancel</button>
        <button className='btn btn-sm btn-yellow'>yes restart</button>
    </div>
</div>
  )
}

export default restart