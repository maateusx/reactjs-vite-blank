import React from "react";
import styled from "styled-components";

const Text = ({ children, style, bold, size, color, align, ...props }) => {
  return React.createElement(
    StyledText,
    Object.assign(
      { style: style, bold: bold, size: size, color: color, align: align },
      props,
    ),
    children,
  );
};

const StyledText = styled.span`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
`;

export default Text;
