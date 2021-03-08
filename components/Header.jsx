import { useContext } from 'react';
import { AppContext, MenuButton } from '.';

const Header = () => {
  const { title } = useContext(AppContext);

  return (
    <div className="bg-green-700 text-white flex flex-col">
      <div className="max-w-screen-lg w-full mx-auto p-4 flex items-center">
        <h1 className="flex-1">{title}</h1>
        <MenuButton />
      </div>
    </div>
  );
};

export default Header;
