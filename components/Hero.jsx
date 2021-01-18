import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ props }) => {
  const { image, minHeight } = props;

  return (
    <div className="w-full mb-4">
      <div className="bg-cover bg-center hero flex content-start">
        <div className="w-full max-w-screen-lg mx-auto flex items-center px-4">
          <h2 className="text-2xl font-semibold text-white">
            Dunder Mifflin Servers <br />
            Providing the best backup services since 2002
          </h2>
        </div>
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
  children: PropTypes.array,
};

Hero.defaultProps = {
  props: {},
  children: [],
};

export default Hero;
