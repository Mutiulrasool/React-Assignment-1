// import React, { useState } from 'react'
// import "./index.css"

// function Counter() {
//     const [updateCounterValue, setUpdateCounterValue] = useState(0);
//     const handleDefaultFormAction = (event) => {
//         event.preventDefault();
//     }

//     const handleInputValue = () => {

//         setUpdateCounterValue(prevValue => prevValue + 1);
//     }

//     const clearCounter = () => {
//         setUpdateCounterValue(0)
//     }
//     return (
//         <>
//             <div className=' w-40 h-auto mx-auto border px-10 py-4 rounded-2xl flex justify-center bg-slate-600'>
//                 <form action="get" onSubmit={handleDefaultFormAction} >
//                     <input type="text" value={updateCounterValue} readOnly className='w-28 border rounded text-center text-2xl' />
//                     <div className='flex justify-center space-x-12 mt-4'>
//                     <button className='p-3 bg-white border rounded-full'> light </button>
//                     <button className='p-3 bg-white border rounded-full' onClick={clearCounter}> Reset</button>
//                     </div>
//                     <button className='border-2 rounded-full w-16 h-16 mt-4 ml-8 bg-slate-400' onClick={handleInputValue}>+</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Counter
import React, { useState } from 'react';
import "./index.css";

function Counter() {
    const [updateCounterValue, setUpdateCounterValue] = useState(0);
    const [isBlueBg, setIsBlueBg] = useState(false);

    const handleInputValue = () => {
        setUpdateCounterValue(prevValue => prevValue + 1);
    };

    const clearCounter = () => {
        setUpdateCounterValue(0);
    };

    const toggleInputBgColor = () => {
        setIsBlueBg(prev => !prev);
    };

    return (
        <>
            <div className='w-56 h-auto mx-auto border p-6 rounded-2xl flex flex-col items-center bg-slate-600'>
                <input 
                    type="text" 
                    value={updateCounterValue} 
                    readOnly 
                    className={`w-28 text-center text-2xl border rounded mb-4 ${isBlueBg ? 'bg-blue-200' : 'bg-white'}`}
                />
                <div className='flex space-x-2 mb-4'>
                    <button 
                        className='px-2 py-1 text-sm bg-slate-600 text-white border rounded-full'
                        onClick={toggleInputBgColor}
                    >
                        Light
                    </button>
                    <button 
                        className='px-2 py-1 text-sm bg-slate-600 text-white border rounded-full' 
                        onClick={clearCounter}
                    >
                        Reset
                    </button>
                </div>
                <button 
                    className='border-2 rounded-full w-16 h-16 bg-slate-400 text-2xl flex items-center justify-center' 
                    onClick={handleInputValue}
                >
                    +
                </button>
            </div>
        </>
    );
}

export default Counter;
