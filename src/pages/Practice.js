import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
   {
  }
`;

const Root1 = styled.div`
   {
    display: flex;
    align-items: center;
    height: 300px;
    width: 100%;
    background: skyblue;
    transform: skew(0deg, -6deg);
  }
`;

const Root2 = styled.div`
   {
    display: flex;
    align-items: center;
    height: 300px;
    width: 100%;
    background: greenyellow;
    transform: skew(0deg, 6deg);
  }
`;
const Text = styled.div`
   {
    transform: skew(0deg, 4deg);
  }
`;

const Practice = () => {
  return (
    <Wrapper>
      <Root1 />
      <Root2 />
      <Root1 />
    </Wrapper>
  );
};

export default Practice;
