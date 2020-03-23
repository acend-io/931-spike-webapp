import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <div className="loader">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle fill="#377bd0" stroke="none" cx="30" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#377bd0" stroke="none" cx="50" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#377bd0" stroke="none" cx="70" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
    );
  }
  return null;
};

Spinner.propTypes = { isLoading: PropTypes.bool };

Spinner.defaultProps = { isLoading: true };

export default Spinner;
