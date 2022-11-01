import React from "react";

const Grid = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-grid`} {...restProps}>
      {children}
    </div>
  );
};

export default Grid;
