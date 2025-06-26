import React, { useState } from 'react';

const Counter = () => {
    const [count,serCount] = useState(0);
    const [inputValue, setInputValue] = useState('');



    return (
        <div>
            <h1>Counter: {count}</h1>
            <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.terget.value)} placeholder='Type someething...'/>
            
        </div>
    );
};

export default Counter;