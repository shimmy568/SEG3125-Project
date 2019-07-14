import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const data = [
    {
        subject: 'Personal Private Repository Commits', A: 45, B: 25
    },
    {
        subject: 'Reviews', A: 5, B: 10
    },
    {
        subject: 'Issues Raised', A: 5, B: 10
    },
    {
        subject: 'Personal Public Repository Commits', A: 30, B: 15
    },
    {
        subject: 'Issues Closed', A: 10, B: 5
    },
    {
        subject: 'Organizational Commits', A: 5, B: 35
    },
];

export default class RChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <ResponsiveContainer width="100%" height={500}>
            <RadarChart outerRadius={150} width={500} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="user1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="user2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend align="center"/>
            </RadarChart>
        </ResponsiveContainer>
        );
    }
}