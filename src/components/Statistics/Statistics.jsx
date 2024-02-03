import style from './Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={style.statistics}>
      <h2 className={style.statistics__title}>Statistics</h2>
      <ul className={style.statistics__list}>
        
        <li className={style.statistics__item}>
          
            Good: <span className={style.statistics__name} key={good}>{good}
          </span>
        </li>
     
        <li className={style.statistics__item}>
          
            Neutral: <span className={style.statistics__name} key={neutral}>{neutral}
          </span>
        </li>
        
        <li className={style.statistics__item}>
          Bad: <span className={style.statistics__name} key={bad}>
            {bad}
          </span>
        </li>

        <li className={style.statistics__item}>
          <span>Total: </span>
          <span>{total}</span>
        </li>

        <li className={style.statistics__item}>
          <span>Positive Feedback: </span>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
      </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;