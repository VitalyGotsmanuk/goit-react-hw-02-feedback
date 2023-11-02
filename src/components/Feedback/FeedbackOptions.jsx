//import css from './Feedback.module.css';

// const { Component } = require("react");

export const Feedback = ({ 
    handleGood,
    handleNeutral,
    handleBad,

   // option,
   //onLeaveFeedback
 
}) => {

    // const handleOption = (option) => {
    //     this.setState((prevState) => {
    //     return {
    //         [option]: prevState[option] +1,
    //     }
    // })};

    return (
        <div> 
            <button className="button" type="button" onClick={(handleGood)}>Good</button>
            <button className="button" type="button" onClick={(handleNeutral)}>Neutral</button>
            <button className="button" type="button" onClick={(handleBad)}>Bad</button>
        </div>
    )
}



{/* <div> 
            <button className="button" type="button" onClick={() => handleOption(good)}>Good</button>
            <button className="button" type="button" onClick={() => handleOption(neutral)}>Neutral</button>
            <button className="button" type="button" onClick={() => handleOption(bad)}>Bad</button>
        </div> */}





    



//     countTotalFeedback = (state) => {
//         let total = (state.good + state.bad + state.neutral);
//         //console.log(total)
//         return total
//     }

//     countPositiveFeedbackPercentage = (state) => {
//         let positive = state.good / (state.good + state.bad + state.neutral) * 100;

//         return Math.round(positive);
//     }
       
//     render() {
//         return (
//             <div>
//                 <h2 className="header">Please leave feedback</h2>
//                 <button className="button" type="button" onClick={(this.handleGood)}>Good</button>
//                 <button className="button" type="button" onClick={(this.handleNeutral)}>Neutral</button>
//                 <button className="button" type="button" onClick={(this.handleBad)}>Bad</button>

//                 <h2 className="header">Statistics</h2>

//                 <p className="item">Good: {this.state.good}</p>
//                 <p className="item">Bad: {this.state.bad}</p>
//                 <p className="item">Neutral: {this.state.neutral}</p>

//                 <p className="item">Total: {this.countTotalFeedback(this.state)}</p> 
//                 <p className="item">Positive feedback: {this.countPositiveFeedbackPercentage (this.state)}%</p> 
//             </div>
//         );           
//     }
// }





