
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
