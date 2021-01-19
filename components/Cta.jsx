import React from 'react';
import { Button } from '.';

const Cta = ({ props }) => {
  const { image, title, content, button } = props;

  return (
    <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-4 px-4">
      <div className="grid lg:grid-cols-5 bg-white rounded-lg overflow-hidden shadow mb-4">
        <div className="col-span-3 py-24 px-4 space-y-4">
          {title && <h3 className="font-semibold text-lg">{title}</h3>}
          {content && <p className="text-sm text-gray-800">{content}</p>}
          <Button>{button.label}</Button>
        </div>
        <div className="col-span-2 cta"></div>
      </div>

      <style jsx>{`
        .cta {
          background: url(${image}) no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Cta;
