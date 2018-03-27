import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import MenuApp from "../../components/MenuApp";
import AppHeader from "../../components/AppHeader";
import Content from "../../components/Content";

export default class App extends Component {
  render() {
    return (
      <Container>
        <MenuApp />
        <AppHeader />
        <Content />
      </Container>
    );
  }
}
