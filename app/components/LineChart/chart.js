import {
    Label, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import React, { PureComponent } from 'react';

const data = [
    {
        name: 'Jan', user1: 25, user2: 21,
    },
    {
        user1: 4, user2: 19,
    },
    {
        user1: 9, user2: 17,
    },
    {
        name: 'April', user1: 30, user2: 28,
    },
    {
        user1: 24, user2: 26,
    },
    {
        user1: 15, user2: 15,
    },
    {
        name: 'July', user1: 8, user2: 2,
    },
    {
        user1: 4, user2: 0,
    },
    {
        user1: 23, user2: 10,
    },
    {
        name:'Oct',user1: 12, user2: 32,
    },
    {
        user1: 14, user2: 20,
    },
    {
        user1: 30, user2: 47,
    },
];

export default class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={40}>
                        <Label value="Month" offset={-1} position="insideBottom" />
                    </XAxis>
                    <YAxis width={40} >
                        <Label angle={270} value="Commits" position="left" style={{ textAnchor: 'middle' }}></Label>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" />
                    <Line type="monotone" dataKey="user1" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="user2" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}