import PropTypes from "prop-types";
import React from "react";

interface Props {
  variant: "outlined";
  className: any;
}

export const TextField = ({ variant, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[260px] h-6 bg-gray-500 font-text-md-normal [font-style:var(--text-md-normal-font-style)] font-[number:var(--text-md-normal-font-weight)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] text-[length:var(--text-md-normal-font-size)] ${className}`}
    />
  );
};

TextField.propTypes = {
  variant: PropTypes.oneOf(["outlined"]),
};
