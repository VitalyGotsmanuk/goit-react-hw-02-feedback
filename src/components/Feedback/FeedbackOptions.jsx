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
