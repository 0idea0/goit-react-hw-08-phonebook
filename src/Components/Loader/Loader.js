import React from 'react';

const Loader = () => {
  return (
    <div className="text-center">
      <div
        style={{
          borderTopColor: 'transparent',
        }}
        className="border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20"
      />
      ...please wait, loading in progress
    </div>
  );
};

export default Loader;
