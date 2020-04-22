import styled from "styled-components";
import { BaseContactComponent } from "../BaseContactComponents";

export const Card = styled(BaseContactComponent)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2em 1em;
  box-shadow: 0px 0px 22px 9px #d6d9dc;
  width: 10em;
  max-width: 10em;
  height: 10em;
  margin-left: 1em;
  margin-bottom: 1em;
`;
