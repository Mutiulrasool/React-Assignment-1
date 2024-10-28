import React from 'react';
import './index.css';
import Counter from './counter';

function App() {
  return (
    <>
      <div className='w-4/12 mx-auto mt-32'>
        <div className='text-center'> <h1 className='text-2xl font-semibold mb-4'>Hello! I have created ths basic and simple project to practice state, event handling and tailwind. </h1></div>
        <Counter name="Sam drouwn" />
      </div>
    </>
  )
}

export default App