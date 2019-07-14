import React, { PureComponent } from 'react';
import {
    Label, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'Jan', user1: 37.24, user2: 21.29,
    },
    {
        user1: 93.2, user2: 87.3,
    },
    {
        user1: 65.23, user2: 54.87,
    },
    {
        name: 'April', user1: 90.283, user2: 43.21,
    },
    {
        user1: 23, user2: 9,
    },
    {
        user1: 67.23, user2: 35,
    },
    {
        name: 'July', user1: 25.21, user2: 29.33,
    },
    {
        user1: 43.20, user2: 49.91,
    },
    {
        user1: 37.30, user2: 10.34,
    },
    {
        name: 'Oct', user1: 77.69, user2: 92.1,
    },
    {
        user1: 14, user2: 20,
    },
    {
        user1: 30, user2: 47,
    },
];

export default class BChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={45}>
                        <Label value="Month" offset={-1} position="insideBottom" />
                    </XAxis>
                    <YAxis width={40} >
                        <Label angle={270} value="Commit Frequency (%)" position="left" style={{ textAnchor: 'middle' }}></Label>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" />
                    <Bar dataKey="user1" fill="#8884d8" />
                    <Bar dataKey="user2" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}