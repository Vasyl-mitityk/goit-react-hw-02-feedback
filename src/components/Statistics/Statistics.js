import React from 'react';
import propTypes from 'prop-types';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      <h3>
        Good: <span>{good}</span>
      </h3>
      <h3>
        Bad: <span>{bad}</span>
      </h3>
      <h3>
        Neutral: <span>{neutral}</span>
      </h3>
      <h3>
        Total: <span>{total}</span>
      </h3>
      <h3>
        Positive Feedback: <span>{positivePercentage}%</span>
      </h3>
    </>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  bad: propTypes.number,
  neutral: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.string,
};
