import {
    Label, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import React, { PureComponent } from 'react';

//Sample Data for the total commits data for a maximum of 5 users
const userData = [
    [25, 19, 17, 30, 26, 15, 8, 0, 10, 12, 20, 47],
    [21, 28, 10, 13, 42, 43, 29, 23, 25, 23, 23, 34],
    [13, 14, 34, 19, 7, 45, 30, 13, 12, 15, 16, 19],
    [24, 20, 23, 22, 24, 27, 29, 30, 46, 47, 48, 21],
    [18, 28, 20, 31, 36, 29, 9, 2, 2, 3, 10, 11]
];

//Sample Data for the lines commited data for a maximum of 5 users
const singleViewData = [
    [180, 5200, 1600, 2129, 1312, 120, 330, 239, 6320, 132, 924, 721],
    [345, 2452, 2994, 2932, 329, 432, 2921, 1532, 2521, 2311, 2300, 1342],
    [1329, 1420, 289, 192, 712, 4532, 3032, 134, 1221, 152, 196, 19],
    [2344, 940, 2399, 2232, 2932, 392, 293, 302, 442, 472, 100, 2119],
    [394, 593, 3953, 1204, 2943, 3902, 3592, 7004, 3942, 3942, 1392, 1149]
];
//Colors representing each individual line
const userColors = ["#f56942", "#ffee6e", "#a6ff6e", "#8884d8", , "#82ca9d"]
//Array of months (XAxis values)
const months = ["Jan", "Feb", 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

//Building a data set for the line graph (XAxis & YAxis value combos..)
function populateData(numberOfUsers, names, isSingleView) {
    let finalData = [];
    for (var i = 0; i < 12; i++) {
        var tempObj = { "name": months[i] };
        for (var j = 0; j < numberOfUsers; j++) {
            if (!isSingleView) {
                tempObj[names[j]] = userData[j][i];
            } else {
                tempObj[names[j]] = singleViewData[j][i];
            }
        }
        finalData.push(tempObj);
    }
    return finalData;
}


export default class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLines: props.users,
            isSingleView: props.singleview,
            allNames: props.usernames
        }
        console.log(props);
    }

    //Rendering the line chart component
    render() {
        //Compiling a list of Line component tags with customized props
        const lineElems = [];
        let yAxisLabel = "";
        for (var i = 0; i < this.state.numberOfLines; i++) {
            lineElems.push(
                <Line type="monotone" dataKey={this.state.allNames[i]} stroke={userColors[i]} key={i}/>
            );
        }
        if (this.state.isSingleView) {
            yAxisLabel = "Lines Committed";
        } else {
            yAxisLabel = "Commits";
        }
        return (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={populateData(this.state.numberOfLines, this.state.allNames, this.state.isSingleView)}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={40}>
                        <Label value="Month" offset={-1} position="insideBottom" />
                    </XAxis>
                    <YAxis width={60} >
                        <Label angle={270} value={yAxisLabel} position="left" style={{ textAnchor: 'middle' }}></Label>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" />
                    {lineElems}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}