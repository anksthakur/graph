"use client";
import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

interface YearData {
  month: string;
  value: number;
}
Highcharts3D(Highcharts); 
const BarChart: React.FC = () => {

  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);


  const yearData: YearData[] = [
    { month: 'Jan', value: 500 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 700 },
    { month: 'Apr', value: 600 },
    { month: 'May', value: 1000 },
    { month: 'Jun', value: 1400 },
    { month: 'Jul', value: 1600 },
    { month: 'Aug', value: 1450 },
    { month: 'Sep', value: 1790 },
    { month: 'Oct', value: 1900 },
    { month: 'Nov', value: 2100 },
    { month: 'Dec', value: 2500 },
  ];

  const filteredData = selectedMonth
    ? yearData.filter(data => data.month === selectedMonth).map(data => data.value)
    : yearData.map(data => data.value);

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 20,  // Rotation angle around the x-axis
        beta: 10,   // Rotation y-axis
        depth: 90   // Depth of the chart
      }
    },
    title: {
      text: 'Yearly Sales Chart'  
    },
    xAxis: {
      categories: selectedMonth ? [selectedMonth] : yearData.map(data => data.month),
      title: {
        text: 'Month'
      },
    },
    yAxis: {
      title: {
        text: 'Sales (Rs)'
      },
      reversed: false
    },plotOptions: {
      column: {
        depth: 25 , // Depth of each column in 3D view
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#9c27b0', '#ff9800']
      }
    },
    series: [
      {
        type: 'column',  // for vertical bars
        name: 'Sales',
        data: selectedMonth ? filteredData : yearData.map(data => data.value),
        colorByPoint: true,
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#9c27b0', '#ff9800']
      }
    ]
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="month-select">Select Month:</label>
        <select id="month-select" onChange={handleMonthChange} value={selectedMonth || ''}>
          <option value="">All</option>
          {yearData.map(data => (
            <option key={data.month} value={data.month}>
              {data.month}
            </option>
          ))}
        </select>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options as Highcharts.Options} />
    </div>
  );
};

export default BarChart;
