import React, { Component } from "react";
import { Menu, Button, Label, Icon, Dropdown } from "semantic-ui-react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export default Flex;
