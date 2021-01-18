import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Reviews = ({ props, children }) => {
  const showReviews = ({ title, content }) => {
    return (
      <div key={title} className="p-4 border rounded-lg bg-white shadow flex flex-col space-y-4">
        <h3 className="text-lg text-gray-800">{title}</h3>
        {content && (
          <p className="text-sm text-gray-600">
            <Markdown>{content}</Markdown>
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2 mb-4">
      {props.title && <h3 className="font-semibold text-lg">{props.title}</h3>}
      <div className="grid lg:grid-cols-2 gap-4">{children.map(showReviews)}</div>
    </div>
  );
};

Reviews.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
};

Reviews.defaultProps = {
  props: {},
  children: [],
};

export default Reviews;
