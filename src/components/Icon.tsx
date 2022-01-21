import React from "react";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  checked?: boolean;
  color?: string;
  subColor?: string;
  opacity?: number;
  margin?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  onClick?: () => void;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
}

const RootWrapper = styled(IconButton)<{
  margin?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}>`
  ${(props) => `  
  margin: ${props.margin}ch;
  margin-top: ${props.mt}ch;
  margin-bottom: ${props.mb}ch;
  margin-left: ${props.ml}ch;
  margin-right: ${props.mr}ch;`}
`;

const Root = styled.div<{
  checked?: boolean;
  color?: string;
  subColor?: string;
  opacity?: number;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
}>`
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => `
  position: ${props.position || "relative"};
  top: ${props.top};
  left: ${props.left};
  right: ${props.right};
  color: ${props.checked ? props.subColor : props.color};
  opacity: ${props.opacity};
  `}
`;

const Icon: React.FC<Props> = ({
  children,
  checked,
  color,
  subColor,
  opacity,
  margin,
  mt,
  mb,
  ml,
  mr,
  onClick,
  position,
  top,
  left,
  right,
}) => {
  return (
    <RootWrapper
      onClick={onClick}
      margin={margin}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      <Root
        position={position}
        top={top}
        left={left}
        right={right}
        checked={checked}
        color={color}
        subColor={subColor}
        opacity={opacity}
      >
        {children}
      </Root>
    </RootWrapper>
  );
};

export default Icon;
