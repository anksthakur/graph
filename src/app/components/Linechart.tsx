"use client"
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);

const LineChart: React.FC = () => {
  const options: Highcharts.Options = {
    title: {
      text: 'Yearly Sales Line Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Spt','Oct','Nov','Dec'],
    },
    yAxis: {
      title: {
        text: 'Sales (Rs)'
      }
    },
    series: [
      {
        type: 'line',
        name: 'Sales',
        data: [
          { y: 500, color: '#FF5733' }, 
          { y: 300, color: '#33FF57' }, 
          { y: 700, color: '#3357FF' }, 
          { y: 600, color: '#F3FF33' }, 
          { y: 1000, color: '#FF33F6' },
          { y: 1400, color: '#33FFF4' }, 
          { y: 1600, color: '#FF8C33' }, 
          { y: 1450, color: '#FF3333' }, 
          { y: 1790, color: '#8CFF33' }, 
          { y: 1900, color: '#33FF8C' }, 
          { y: 2000, color: '#8C33FF' }, 
          { y: 2500, color: '#F4A733' }  
        ]
      }
    ]
  };

  return(<> <HighchartsReact highcharts={Highcharts} options={options as Highcharts.Options} /></>);
};

export default LineChart;
