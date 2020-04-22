import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  justify-self: center;
`;

export const List = styled.div<{ row: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: start;
  flex-flow: row wrap;
  margin-left: ${(props) => (props.row ? "-1em" : "0")};
`;

export const SubTitle = styled.h2`
  margin-bottom: 2em;
  margin-top: 0;
`;
