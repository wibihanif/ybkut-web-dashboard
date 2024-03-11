import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useGetAverageOrderValue } from '../../api/useGetAverageOrderValue';

export const AverageOrder = () => {
  const { data: averageOrderValue } = useGetAverageOrderValue();

  useEffect(() => {
    // const labels = ['UT DCare', 'Poliklinik UT', 'YKBUT', 'UT School'];
    const labels = averageOrderValue?.map(order => new Date(order.tahun).getFullYear());

    // Define colors for each label
    const labelColors: { [key: string]: string } = {
      'UT DCare': '#38a33a',
      'Poliklinik UT': '#58dbec',
      YKBUT: '#3845a3',
      'UT School': '#d3d026',
    };

    const seriesData = averageOrderValue?.map(order => order.avg);

    const options = {
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
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
      series: [
        {
          name: 'sales',
          data: seriesData,
          // color: ({ value }: { value: number }) => {
          //   const label = labels[seriesData.indexOf(value)];
          //   return labelColors[label];
          // },
        },
      ],
      xaxis: {
        categories: labels,
      },
    };

    const chart = new ApexCharts(document.getElementById('line-chartt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, [averageOrderValue]);

  return <div id="line-chartt"></div>;
};
