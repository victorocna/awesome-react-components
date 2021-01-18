import { useContext } from 'react';
import { AppContext } from '.';

const Team = () => {
  const { team } = useContext(AppContext);
  if (!team) {
    return null;
  }

  const showTeam = (member) => {
    const { name, avatar, description } = member;

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

  const { props, children } = team;
  if (!props || !children) {
    return null;
  }

  return (
    <div className="space-y-2">
      {props.title && <h3 className="font-semibold text-lg">{props.title}</h3>}
      <div className="grid grid-cols-3 gap-4">{children.map(showTeam)}</div>
    </div>
  );
};

export default Team;
