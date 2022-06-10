import { useMemo } from 'react'

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(Tooltip, Title, ArcElement, Legend)

const options = {
  responsive: true,
}

export const LineChart = () => {
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
      labels: ['Red', 'Blue', 'Yellow'],
    }
  }, [])

  return (
    <div className=" flex gap-4 flex-wrap justify-center">
      <div className="w-[15rem]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-[15rem]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}
