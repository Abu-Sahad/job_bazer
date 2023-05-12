import { useState } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Assignment 1', mark: 60 },
    { name: 'Assignment 2', mark: 60 },
    { name: 'Assignment 3', mark: 60 },
    { name: 'Assignment 4', mark: 60 },
    { name: 'Assignment 5', mark: 60 },
    { name: 'Assignment 6', mark: 60 },
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Statistics = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleBarClick = (data, index) => {
        setActiveIndex(index);
    };

    return (
        <RadialBarChart
            width={500}
            height={300}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
            onClick={handleBarClick}
        >
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="mark"
            />
            <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
            />
            <Tooltip content={<CustomTooltip />} active={activeIndex !== null} />
        </RadialBarChart>
    );
};

export default Statistics;