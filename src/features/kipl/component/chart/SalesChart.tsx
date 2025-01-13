import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';
import { Box, Text } from '@mantine/core';

export const SalesChart = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const labels = ['Sponsor Fee', 'Customer Training', 'Other'];

    // You can directly set the values as needed for each slice
    const series = [100, 200, 300]; // Example values
    const percentages = [3, 5, 8]; // Manually set percentages

    // Calculate the total sum of all series values
    const totalSum = series.reduce((acc, curr) => acc + curr, 0);
    setTotal(totalSum);

    const getChartOptions = () => {
      return {
        series: series,
        colors: [
          'rgba(253, 224, 71, 1)',
          'rgba(147, 197, 253, 1)',
          'rgba(134, 239, 172, 1)',
          '#FFA500',
          '#008080',
          '#D3D3D3',
        ],
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
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: '100%',
            dataLabels: {
              offset: -25,
              formatter: (val: number, opts: any) => {
                const percentage = percentages[opts.seriesIndex]; // Use static percentages
                const label = `${val} (${percentage}%)`; // Show amount and static percentage
                return label; // Display both value and percentage
              },
            },
          },
        },
        labels: labels,
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
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

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, getChartOptions());
      chart.render();
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <Box>
      <Text align="center" weight={700} size="xl" mt={10} mb={20}>
        Summary: {total} {/* Display the sum of all values */}
      </Text>
      <div ref={chartRef} id="pie-sales"></div> {/* Use the chartRef here */}
    </Box>
  );
};
