import {
    Label, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import React, { PureComponent } from 'react';

const userData = [
    [25, 19, 17, 30, 26, 15, 8, 0, 10, 12, 20, 47],
    [21, 28, 10, 13, 42, 43, 29, 23, 25, 23, 23, 34],
    [13, 14, 34, 19, 7, 45, 30, 13, 12, 15, 16, 19],
    [24, 20, 23, 22, 24, 27, 29, 30, 46, 47, 48, 21],
    [18, 28, 20, 31, 36, 29, 9, 2, 2, 3, 10, 11]
];

const userColors = ["#f56942", "#ffee6e", "#a6ff6e", "#8884d8", , "#82ca9d"]

const months = ["Jan", "Feb", 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function populateData(numberOfUsers) {
    let finalData = [];
    for (var i = 0; i < 12; i++) {
        var tempObj = { "name": months[i] };
        for (var j = 0; j < numberOfUsers; j++) {
            tempObj["user" + (j + 1)] = userData[j][i];
        }
        console.log(tempObj);
        finalData.push(tempObj);
    }
    return finalData;
}


export default class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLines: props.users
        }
    }
    render() {
        const lineElems = [];
        for (var i = 0; i < this.state.numberOfLines; i++) {
            lineElems.push(
                <Line type="monotone" dataKey={"user" + (i + 1)} stroke={userColors[i]} />
            );
        }
        return (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={populateData(5)}
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
                    {lineElems}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}