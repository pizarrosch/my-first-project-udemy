import ChartBar from './ChartBar';
import s from './Chart.module.css'

function Chart({dataPoints}) {

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const Maximum = Math.max(...dataPointValues);

  return (
    <div className={s.chart}>
      {dataPoints.map((dataPoint) =>
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={Maximum}
          label={dataPoint.label}
        />)}
    </div>
  )
}

export default Chart;