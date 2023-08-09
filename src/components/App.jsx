import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleFeedback = name => {
    // switch (name) {
    //   case 'good':
    //     this.setState(prev => ({
    //       good: prev.good + 1,
    //     }));
    //     break;
    //   case 'neutral':
    //     this.setState(prev => ({
    //       neutral: prev.neutral + 1,
    //     }));
    //     break;
    //   case 'bad':
    //     this.setState(prev => ({
    //       bad: prev.bad + 1,
    //     }));
    //     break;

    //   default:
    //     break;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const positiveFeedback = Math.round((good / total) * 100) || 0;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.hendleFeedback}
          options={Object.keys(this.state)}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}
