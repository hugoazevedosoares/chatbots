import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseContactComponent = styled.div`
  border-radius: 5px;
  background-color: white;
  padding: 1em;
  flex: auto;
  position: relative;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none !important;
  cursor: default;
  color: unset;
`;
