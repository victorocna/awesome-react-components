import React from 'react';
import PropTypes from 'prop-types';
import withContext from './withContext';

const Hero = ({ props, children }) => {
  const { image, minHeight } = props;

  return (
    <div className="w-full mb-4">
      <div className="bg-cover bg-center hero flex content-start">
        <div className="w-full max-w-screen-lg mx-auto flex items-center px-4">{children}</div>
      </div>
      <style jsx>{`
        .hero {
          background-image: url(${image});
          min-height: ${minHeight}px;
        }
      `}</style>
    </div>
  );
};

Hero.propTypes = {
  props: PropTypes.object,
};

Hero.defaultProps = {
  props: {},
};

export default withContext(Hero);
