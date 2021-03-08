import { useContext } from 'react';
import { AppContext, MenuItem } from '.';

const Menu = () => {
  const { menu } = useContext(AppContext);

  const showItems = ({ label, href }) => {
    return <MenuItem key={`menu-item-${label}`} label={label} href={href} />;
  };

  return (
    <>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav className="nav-menu lg:w-80 lg:min-w-52 overflow-visible bg-white p-4 lg:p-8 border-r border-gray-200">
        <ul className="space-y-4 my-4 text-gray-300">{menu.children.map(showItems)}</ul>
      </nav>
    </>
  );
};

export default Menu;
