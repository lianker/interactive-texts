import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Badge from "../Badge";

const MyMenu = styled(Menu)`
  &&&& {
    border-bottom: none;
  }
`;

export default class MenuApp extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <MyMenu color="blue" size="massive" secondary pointing>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="new-history"
          active={activeItem === "new-history"}
          onClick={this.handleItemClick}
          as={Link}
          to="/new-history"
        >
          New History
        </Menu.Item>

        <Menu.Item
          name="my-histories"
          active={activeItem === "my-histories"}
          onClick={this.handleItemClick}
          as={Link}
          to="/my-histories"
        >
          My Histories
        </Menu.Item>
        <Menu.Item
          name="stats"
          active={activeItem === "stats"}
          onClick={this.handleItemClick}
          as={Link}
          to="/stats"
        >
          Stats
        </Menu.Item>

        <Menu.Menu position="right">
          <Badge badgeContent="57" colorBadge="red" icon="bell" />
        </Menu.Menu>
      </MyMenu>
    );
  }
}
