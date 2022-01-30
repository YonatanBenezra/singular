import React from "react";

const Progressbar = ({ loading }) => {
  return (
    <div className="loader">
      <div className="loading" style={{ height: `${loading}%` }}></div>
    </div>
  );
};

export default Progressbar;
