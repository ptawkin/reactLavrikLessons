import React, { useState } from 'react';

import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn";
import UserCard from "./UserCard";
import SmartCounter from "./SmartCounter";

function App() {
    let [ clicks, updateClicks ] = useState(0);

    return (
        <div>
            <header>
                header
            </header>
            <main>
                <h2>
                    Test class
                </h2>
                <CounterClass />
                <hr/>

                <h2>
                    Test fn, max = 5
                </h2>
                <CounterFn
                    max={5}
                />
                <hr/>

                <h2>
                    Test fn, max = 9
                </h2>
                <CounterFn
                    max={9}
                />
                <hr/>

                <h2>
                    Smart counter
                </h2>
                <SmartCounter
                    min={0}
                    max={13}
                />
                <hr/>
            </main>
            <footer>
                footer
                <UserCard
                    name='Jon'
                    description='pirate'
                />
                <UserCard
                    name='Jack'
                    description='parrot'
                />
            </footer>
        </div>
    )
}

export default App;
