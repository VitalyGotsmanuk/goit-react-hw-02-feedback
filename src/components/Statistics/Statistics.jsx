
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
    <p className="item">Good: {good}</p>
    <p className="item">Bad: {bad}</p>
    <p className="item">Neutral: {neutral}</p>

    <p className="item">Total: {countTotalFeedback(state)}</p> 
    <p className="item">Positive feedback: {countPositiveFeedbackPercentage(state)}%</p> 
  </div> 
)
}





       