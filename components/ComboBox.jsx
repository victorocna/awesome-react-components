import React from 'react';
import { Button } from '.';

const ComboBox = ({ props }) => {
  const { image, title, content, button } = props;

  return (
    <>
      <div className="grid lg:grid-cols-2 bg-white rounded-lg overflow-hidden shadow mb-4">
        <div className="py-8 lg:py-24 px-4 space-y-4">
          {title && <h3 className="font-semibold text-lg">{title}</h3>}
          {content && <p className="text-sm text-gray-800">{content}</p>}
          <Button>{button.label}</Button>
        </div>
        <div className="combobox"></div>
      </div>

      <style jsx>{`
        .combobox {
          background: url(${image}) no-repeat center center;
          background-size: cover;
          min-height: 200px;
        }
      `}</style>
    </>
  );
};

export default ComboBox;
