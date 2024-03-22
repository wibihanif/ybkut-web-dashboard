import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import axios from 'axios';

export const RevenuePie = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = {
        //   member: 83.87,
        //   incidental: 16.13,
        // };

        const response = await axios.get(
          'https://0aee-2001-448a-2002-bbb3-9198-22b1-5f06-3a55.ngrok-free.app/api/report-revenue-percent',
        );
        const data = response.data;

        const labels = Object.keys(data);
        const values = Object.values(data);

        const getChartOptions = () => {
          return {
            series: values,
            colors: ['#1a9f23', '#3e1a9f'],
            chart: {
              height: 420,
              width: '100%',
              type: 'pie',
              animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                  speed: 1000,
                },
              },
              dropShadow: {
                enabled: true,
                opacity: 0.3,
                blur: 5,
                left: -7,
                top: 22,
              },
            },
            stroke: {
              colors: ['white'],
              lineCap: '',
            },
            plotOptions: {
              pie: {
                labels: {
                  show: true,
                },
                size: '100%',
                dataLabels: {
                  offset: -25,
                },
              },
            },
            labels: labels,
            dataLabels: {
              enabled: true,
              style: {
                fontFamily: 'Inter, sans-serif',
              },
            },
            legend: {
              position: 'bottom',
              fontFamily: 'Inter, sans-serif',
            },
            yaxis: {
              labels: 'Unit',
            },
            xaxis: {
              labels: 'Unit',
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
          };
        };

        const chart = new ApexCharts(document.getElementById('line-charttttt'), getChartOptions());

        chart.render();
        return () => {
          chart.destroy();
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div id="line-charttttt"></div>;
};
