import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import styles from './App.module.css';

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = object => {
    return Object.values(object).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = (
      (this.state.good * 100) /
      Object.values(this.state).reduce((a, b) => a + b, 0)
    ).toFixed(2);

    return this.state.good !== 0 ? positiveFeedbackPercentage : 0;
  };

  incrementState = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    let total = this.countTotalFeedback(this.state);
    let positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <section className={styles.container}>
          <Section
            title="Please leave feedback!!"
            options={[good, bad, neutral]}
            onLeaveFeedback={this.incrementState}
          />

          {this.countTotalFeedback(this.state) !== 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            />
          )}
        </section>
      </>
    );
  }
}
