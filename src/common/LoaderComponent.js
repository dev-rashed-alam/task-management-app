import React from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';

/**
 * The LoaderComponent to be displayed when the isLoading props is true.
 *
 * @component
 * @returns {JSX.Element}
 */
const LoaderComponent = ({ isLoading = false, children }) => {
  LoadingOverlay.propTypes = undefined;
  return (
    <LoadingOverlay
      active={isLoading}
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'transparent'
        }),
        spinner: (base) => ({
          ...base,
          width: '80px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          marginTop: -100,
          marginLeft: 0,
          '& svg circle': {
            stroke: '#452D8D'
          }
        }),
        content: (base) => ({
          ...base,
          color: '#452D8D'
        })
      }}
      spinner
      text="">
      {children}
    </LoadingOverlay>
  );
};

LoaderComponent.prototypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default LoaderComponent;
