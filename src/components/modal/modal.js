import React from 'react'
import Win from './win'
import Restart from './restart'
import { useContext } from 'react'
import { ModelContext } from '../../context/ModelContext'

export const Modal = () => {
  const{show}=useContext(ModelContext);
  return (
    <>
    {show &&(
    <div className='modal'>
      <div className='modal__content'>
        <div className='container'>
        {/* <Win /> */}
        <Restart />
        </div>
      </div>
    </div>
    )}
    </>
  );
};
