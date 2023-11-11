import css from './Statistics.module.css';

export const Statistics = ({
    state,
    good, 
    neutral, 
    bad,

    countTotalFeedback,
    countPositiveFeedbackPercentage
}) => {

return (
  <div>
    <p className={css.item}>Good: {good}</p>
    <p className={css.item}>Bad: {bad}</p>
    <p className={css.item}>Neutral: {neutral}</p>

    <p className={css.item}>Total: {countTotalFeedback(state)}</p> 
    <p className={css.item}>Positive feedback: {countPositiveFeedbackPercentage(state)}%</p> 
  </div> 
)
}





       