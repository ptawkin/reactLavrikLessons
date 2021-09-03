import React, { useState } from 'react';

function AppFn() {
    let [ clicks, updateClicks ] = useState(0);

    return (
        <div>
            <header>
                header
            </header>
            <main>
                fn
                <span onClick={() => updateClicks(clicks++)}>
                        { clicks }
                </span>
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default AppFn;
