import s from './ChartBar.module.css';

function ChartBar(props) {

  let barFillHeight = '0%';

  if(props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={s.chartBar}>
      <div className={s.chartBar__inner}>
        <div className={s.chartBar__fill} style={{height: barFillHeight}}></div>
      </div>
      <div className={s.chartBar__label}>{props.label}</div>
    </div>
  )
}

export default ChartBar;