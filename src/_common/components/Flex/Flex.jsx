import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export default Flex;
