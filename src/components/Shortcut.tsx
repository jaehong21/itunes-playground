import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  text?: string;
  fontSize?: number;
  color?: string;
}

const Root = styled.a<{ fontSize?: number; color?: string }>`
  text-decoration: none;
  ${(props) => `
    font-size: ${props.fontSize}px;
    color: ${props.color};
    `}
`;

const Shortcut: React.FC<Props> = ({ href, text, fontSize, color }) => {
  return (
    <IconButton>
      <Root href={href} fontSize={fontSize} color={color} target="_blank">
        {text}
      </Root>
    </IconButton>
  );
};

export default Shortcut;
