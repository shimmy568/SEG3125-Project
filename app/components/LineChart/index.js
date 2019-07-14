import React from 'react';
import Chart from './chart';

export default function LineChart(props) {
    return (
        <div>
            <Chart users={props.users} singleview={props.singleview} usernames={props.usernames}/>
        </div>
    );
}