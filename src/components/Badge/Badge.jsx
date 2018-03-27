import React from "react";
import { Button, Label } from "semantic-ui-react";
import styled from "styled-components";

import Flex from "../../_common/components/Flex/Flex";

const StyledLabel = styled(Label)`
  &&&& {
    position: relative;
    top: -24%;
    left: 8%;
  }
`;

const Badge = ({ badgeContent, colorBadge, icon, ...rest }) => (
  <Flex justifyContent="center" alignItems="center">
    <Button basic icon={icon} circular style={{ margin: 0 }} />
    <StyledLabel color={colorBadge} circular floating size="tiny">
      {badgeContent}
    </StyledLabel>
  </Flex>
);

export default Badge;
