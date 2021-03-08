import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ children }) => {
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
        <ul className="space-y-4 my-4 text-gray-300">{children.map(showItems)}</ul>
      </nav>
    </>
  );
};

Menu.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
};

Menu.defaultProps = {
  props: {},
  children: [],
};

export default Menu;
