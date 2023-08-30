import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'


const BoardCard = ({ user="nouser",active,index }) => {
  return (
    <div       className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${active ? "active" : "shadow-gray"}`}
    
    >
{user==='x' && <Xicon color={active &&"dark"} size="lg"/>}
{user==='o' && <Oicon color={active &&"dark"} size="lg"/>}
   
    </div>
  )
}

export default BoardCard