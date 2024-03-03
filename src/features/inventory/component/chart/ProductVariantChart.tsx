import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useGetProductPerCategory } from '../../api/useGetProductPerCategory';

export const ProductVariantChart = () => {
  const { data: productPerCategory } = useGetProductPerCategory();

  useEffect(() => {
    const labels = productPerCategory && productPerCategory?.map(product => product.type);
    const series = productPerCategory && productPerCategory?.map(product => Number(product.count));

    const getChartOptions = () => {
      return {
        series,
        colors: ['#38a33a', '#58dbec', '#3845a3', '#d3d026'],
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
        labels,
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
    const chart = new ApexCharts(document.getElementById('pie-chart'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, [productPerCategory]);

  return <div id="pie-chart"></div>;
};
