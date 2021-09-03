import React from 'react';
import ReactDom from 'react-dom';

// import App from './App';
import AppFn from './AppFn';

ReactDom.render(
    <AppFn />,
    document.querySelector('.app')
);
