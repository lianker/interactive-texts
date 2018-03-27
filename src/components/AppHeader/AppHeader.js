import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const AppHeader = () => (
  <Wrapper>
    <Title>Interactive Texts</Title>
  </Wrapper>
);

export default AppHeader;
