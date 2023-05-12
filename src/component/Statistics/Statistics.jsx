import { XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Legend, Bar } from 'recharts';

const data = [
    { name: 'Assignment 1', mark: 60 },
    { name: 'Assignment 2', mark: 60 },
    { name: 'Assignment 3', mark: 60 },
    { name: 'Assignment 4', mark: 60 },
    { name: 'Assignment 5', mark: 60 },
    { name: 'Assignment 6', mark: 60 },
];
const Statistics = () => {
    return (
        <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mark" fill="#8884d8" />
        </BarChart>
    );
};

export default Statistics;