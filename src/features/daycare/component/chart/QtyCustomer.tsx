import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import axios from 'axios';

interface DailyReport {
  label: string;
  member: number;
  incidental: number;
}

export const QtyCustomer = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = [
        //   {
        //     label: 'January',
        //     member: 4,
        //     incidental: 4,
        //   },
        //   {
        //     label: 'February',
        //     member: 0,
        //     incidental: 3,
        //   },
        //   {
        //     label: 'March',
        //     member: 0,
        //     incidental: 3,
        //   },
        // ];
        const response = await axios.get<DailyReport[]>(
          'https://0aee-2001-448a-2002-bbb3-9198-22b1-5f06-3a55.ngrok-free.app/api/report-qty-customer',
        );
        const data = response.data;

        const labels = data.map(item => item.label);
        const memberData = data.map(item => item.member);
        const incidentalData = data.map(item => item.incidental);

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
              name: 'Member',
              data: memberData,
            },
            {
              name: 'Incidental',
              data: incidentalData,
            },
          ],
          xaxis: {
            categories: labels,
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#1a9f23', '#3e1a9f'],
        };

        const chart = new ApexCharts(document.getElementById('line-chartt'), options);
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

  return <div id="line-charttt"></div>;
};
