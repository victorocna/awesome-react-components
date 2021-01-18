import React from 'react';
import PropTypes from 'prop-types';

const Team = ({ props, children }) => {
  const showTeam = ({ name, avatar, description }) => {
    return (
      <div key={name} className="p-4 border rounded-lg bg-white shadow flex items-center space-x-4">
        {avatar && (
          <div>
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full" />
          </div>
        )}
        <div>
          <h3 className="text-lg text-gray-800">{name}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-2 mb-4">
      {props.title && <h3 className="font-semibold text-lg">{props.title}</h3>}
      <div className="grid lg:grid-cols-3 gap-4">{children.map(showTeam)}</div>
    </div>
  );
};

Team.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
};

Team.defaultProps = {
  props: {},
  children: [],
};

export default Team;
