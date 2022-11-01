import React from "react";

 const Stack = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-stack`} {...restProps}>
      {children}
    </div>
  );
};

export default Stack;
