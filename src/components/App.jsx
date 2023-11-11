import '../index.css';
import { Component } from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics'

export class App extends Component {
    
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };    

  handleOption = (option) => {
      this.setState((prevState) => {
      return {
          [option]: prevState[option] +1,
      }
  })};

  // handleGood = () => { 
  //   //console.log("Good", event)
  //   this.setState({ good: this.state.good + 1 });
  //   // console.log("Good", this.state.good)     
  // };

  // handleNeutral = () => { 
  //   //console.log("Neutral", event)
  //   this.setState({ neutral: this.state.neutral + 1 });
  // };

  // handleBad = () => { 
  //   //console.log("Bad", event)
  //   this.setState({ bad: this.state.bad + 1 }); 
  // };

  countTotalFeedback = (state) => {
      let total = (state.good + state.bad + state.neutral);
      //console.log(total)
      return total
  }

  countPositiveFeedbackPercentage = (state) => {
      let positive = state.good / (state.good + state.bad + state.neutral) * 100;
      return Math.round(positive);
  }

  render() {

    const isFeedback = this.countTotalFeedback(this.state);

    return (
      <>
        <h1>2-nd feedback HW! 👍</h1>

        <Section title="Please leave feedback"> 
            <Feedback
            // handleGood={this.handleGood}
            // handleNeutral={this.handleNeutral}
            // handleBad={this.handleBad}

          option={Object.keys(this.state)}
          onLeaveFeedback={this.handleOption}
        />  
        </Section>
        
        {isFeedback === 0 ? <Section
          title="There is no feedback" /> : 

        <Section title = "Statistics">  
          <Statistics
            state={this.state }
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}

            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        }
      </>
    );
  };
}