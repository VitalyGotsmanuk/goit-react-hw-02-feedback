//import css from './Feedback.module.css';

// const { Component } = require("react");

export const Feedback = ({ state, handleGood, handleNeutral, handleBad }) => {
    
    const countTotalFeedback = (state) => {
        let total = (state.good + state.bad + state.neutral);
        //console.log(total)
        return total
    }

    const countPositiveFeedbackPercentage = (state) => {
        let positive = state.good / (state.good + state.bad + state.neutral) * 100;

        return Math.round(positive);
    }


    return (
        <>
            <h2 className="header">Please leave feedback</h2>
            <div> 
            <button className="button" type="button" onClick={() => handleGood()}>Good</button>
            <button className="button" type="button" onClick={() => handleNeutral()}>Neutral</button>
            <button className="button" type="button" onClick={() => handleBad()}>Bad</button>
            </div>

            <h2 className="header">Statistics</h2>

            <div>
                <p className="item">Good: {state.good}</p>
                <p className="item">Bad: {state.bad}</p>
                <p className="item">Neutral: {state.neutral}</p>

                <p className="item">Total: {countTotalFeedback(state)}</p> 
                <p className="item">Positive feedback: {countPositiveFeedbackPercentage (state)}%</p> 
            </div>  

            {/* {(state) ?
                
            <h3> There is no feedback</h3>           
            :
             
            } */}
        </>
    )
}


// export class Feedback extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
    
//     handleGood = (event) => { 
//         console.log("Good", event)
//         this.setState({ good: this.state.good + 1 });

//         // console.log("Good", this.state.good)     
//     };

//     handleNeutral = (event) => { 
//         console.log("Neutral", event)
//         this.setState({ neutral: this.state.neutral + 1 });
//     };

//     handleBad = (event) => { 
//         console.log("Bad", event)
//         this.setState({ bad: this.state.bad + 1 }); 
//     };
       
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
//             </div>
//         );    

        
//     }

// }


