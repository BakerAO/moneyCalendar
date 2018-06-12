import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class moneyCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>Hello DMagazine</div>
        );
    }
}

ReactDOM.render(
    <moneyCalendar />
    , document.querySelector('.container')
);

