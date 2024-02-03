import style from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad, options, onLeaveFeedback }) => {
  return (
    <div className={style.feedback}>
      <h1 className={style.feedback__title}>Please leave feedback</h1>
      <div className="feedback__buttons">
      {options.map(option => (
        <button className={style.feedback_buttons}
          type="button"
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;