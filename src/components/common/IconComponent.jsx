import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const IconComponent = ({
  icon,
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <Icon
      icon={icon}
      width={width}
      height={height}
      style={{ color, ...style }}
      className={className}
      {...rest}
    />
  );
};

IconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default IconComponent;
