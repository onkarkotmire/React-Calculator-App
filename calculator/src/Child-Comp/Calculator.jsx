
import React, { useState } from 'react';
import './Calculator.css'

function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        const value = e.target.value;
        setInput(input + value);
    }

    const handleClear = () => {
        setInput('');
    }

    const handleCalculate = () => {
        const result = eval(input);
        setInput(result.toString());
    }

    return (
        <div className="calculator">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  className='input-box' />
            <div className="buttons">
                <div className="number-box">

                    <div>
                        <button  className='big-btn' id='big-btn-reset' onClick={handleClear} >Reset</button>
                        <button onClick={handleClick} value="/" className='small-btn'>/</button>
                    </div>

                    <div>
                        <button onClick={handleClick} value="7" className='small-btn'>7</button>
                        <button onClick={handleClick} value="8" className='small-btn'>8</button>
                        <button onClick={handleClick} value="9" className='small-btn'>9</button>
                    </div>

                    <div>
                        <button onClick={handleClick} value="4" className='small-btn'>4</button>
                        <button onClick={handleClick} value="5" className='small-btn'>5</button>
                        <button onClick={handleClick} value="6" className='small-btn'>6</button>
                    </div>

                    <div>
                        <button onClick={handleClick} value="1" className='small-btn'>1</button>
                        <button onClick={handleClick} value="2" className='small-btn'>2</button>
                        <button onClick={handleClick} value="3" className='small-btn'>3</button>
                    </div>

                    <div>
                        <button onClick={handleClick} value="0" className='big-btn' id="big-btn-0">0</button>
                        <button onClick={handleClick} value="." className='small-btn'>.</button>
                    </div>


                </div>

                <div className="operation-box">
                    <button onClick={handleClick} value="*" className='operation-btn'>x</button>
                    <button onClick={handleClick} value="-" className='operation-btn'>-</button>
                    <button onClick={handleClick} value="+" className='operation-btn'>+</button>
                    <button onClick={handleCalculate} className='operation-btn-equalto'>=</button>
                </div>

            </div>
        </div>
    );
}

export default Calculator;