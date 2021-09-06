import React from 'react';

import Counter from "./Counter";

function App() {
    return (
        <div>
            <h2>
                Smart counter
            </h2>
            <Counter
                min={20}
                max={50}
            />
            <hr/>
        </div>
    )
}

export default App;
