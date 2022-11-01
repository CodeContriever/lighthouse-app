import React from "react";

 const Text = ({ children, className, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

export default Text;
