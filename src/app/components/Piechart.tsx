"use client";
import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface YearData {
  month: string;
  value: number;
}

const PieChart: React.FC = () => {
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
    ? yearData.filter(data => data.month === selectedMonth)
    : yearData;

  const options: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Yearly Sales Distribution'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%'
        },
        innerSize: 100,  // makes the pie chart into a donut chart
        size: '80%',     // controls the size of the pie chart
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#9c27b0', '#ff9800']
      }
    },
    series: [
      {
        type: 'pie',  // Specify the type of series
        name: 'Sales',
        data: filteredData.map(data => ({
          name: data.month,
          y: data.value
        }))
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

export default PieChart;
