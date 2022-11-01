import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder2: "rounded-radius2",
  RoundedBorder8: "rounded-radius8",
  icbRoundedBorder4: "rounded-radius4",
  icbRoundedBorder15: "rounded-radius15",
};
const variants = {
  OutlineBlack9000c1_2: "bg-blue_800 shadow-bs text-white_A700",
  OutlineBlack9000c: "bg-pink_600 shadow-bs text-white_A700",
  FillGray200: "bg-gray_200 text-gray_900",
  OutlineBluegray100: "bg-gradient  shadow-bs2 text-bluegray_901",
  OutlineBluegray1001_2: "bg-blue_800 shadow-bs2 text-white_A700",
  OutlineBlue800: "border border-blue_800 border-solid shadow-bs text-blue_800",
  FillBlue800: "bg-blue_800 text-white_A700",
  FillPink600: "bg-pink_600 text-white_A700",
  icbFillBlue800: "bg-blue_800",
  icbOutlineGray203: "bg-white_A700 shadow-bs1",
};
const sizes = {
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lg: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  xl: "lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px]",
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  mdIcn: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  lgIcn: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder2",
    "RoundedBorder8",
    "icbRoundedBorder4",
    "icbRoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9000c1_2",
    "OutlineBlack9000c",
    "FillGray200",
    "OutlineBluegray100",
    "OutlineBluegray1001_2",
    "OutlineBlue800",
    "FillBlue800",
    "FillPink600",
    "icbFillBlue800",
    "icbOutlineGray203",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "OutlineBlack9000c1_2",
  size: "md",
};

export default Button;
