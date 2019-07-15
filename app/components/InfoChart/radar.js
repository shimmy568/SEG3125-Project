import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell, Legend, ResponsiveContainer
} from 'recharts';


//Four sample data plots
const data = [
    { name: 'Commits', value: 64 },
    { name: 'Issues', value: 12 },
    { name: 'Reviews', value: 4 },
    { name: 'Pull Requests', value: 20 },
];
//RGB Hex color values. Used for pie chart sections
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//Adding an outside custom label to the pie chart
const customLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);   
    return (
      <text
        x={x}
        y={y}
        fill="#212730"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {value}%
      </text>
    );
  }

export default class RChart extends PureComponent {
    //Renders the pie chart component wrapped under a responsive container
    render() {
        return (
            <ResponsiveContainer width="100%" height={325}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label= {customLabel}
                        labelLine={false}
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}