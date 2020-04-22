import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #2cc3d5;
  color: #2cc3d5;

  height: 3em;
  min-width: 100px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    border: none;
    color: white;
    background-color: #2cc3d5;
  }
`;

export default Button;
