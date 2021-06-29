import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./component/Game";
import './index.css';

// ========================================

ReactDOM.render(
    <Game row={4} col={4} winCase={3} />,
    document.getElementById('root')
);
