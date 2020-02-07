import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,
} from 'recharts';

const data = [
  {
    name: '9/1', av: 100, lv: -50, pv: 50,
  },
  {
    name: '9/8', av: 125, lv: -35, pv: 30,
  },
  {
    name: '9/15', av: 97, lv: -22, pv: 40,
  },
  {
    name: '9/22', av: 55, lv: -60, pv: 15,
  },
  {
    name: '9/29', av: 160, lv: -40, pv: 30,
  },
  {
    name: '10/6', av: 170, lv: -30, pv: 20,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ComposedChart
        width={500}
        height={400}
        data={data}
        stackOffset="sign"
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" padding={{left:20, right:20}}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="adds" dataKey="av" barSize={20} stackId="a" fill="#00A6CA" />
        <Bar name="losses" dataKey="lv" barSize={20} stackId="a" fill="#b30000" />
        <Area name="% active users" type="monotone" dataKey="pv" fill="#82ca9d" stroke="#82ca9d" fillOpacity={0.2} />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
    );
  }
}
