import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

 const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

 

export default function Graph({ graphData }) {

    const inputData = graphData?.xAxis?.map((x, i) => {
      return {
        x,
        y: graphData.yAxis[i],
      }
    })

    const data = {
        datasets: [
          {
            label: 'A dataset',
            data: inputData || Array.from({ length: 100 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
  return (
    <div className="graph">
      <Scatter data={data} options={options} />
    </div>
  );
}