// app/admin/_components/Charts.jsx
'use client';

import { BarChart as ReBarChart, PieChart as RePieChart, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

export function CustomBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#6366f1" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}

export function CustomPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RePieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#6366f1"
          label
        />
        <Tooltip />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
}