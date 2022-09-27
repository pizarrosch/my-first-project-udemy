import s from './Card.module.css';

function Card(props) {

  const classes = s.card + ' ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;