import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Input = styled.input`
  outline: none;
  border: 1px solid #e8ecf0;
  height: 3em;
  font-size: 12px;
  border-radius: 8px;
  color: #97a9ba;
  padding: 0 1em;
  flex: 1;

  &::placeholder {
    color: currentColor;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const TopRow = styled.div`
  justify-content: space-between;
  width: 100%;
  align-items: center;
  align-content: center;
  display: flex;
  margin-bottom: 1em;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  width: 50%;

  @media (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;

  &.disabled {
    filter: brightness(0) saturate(100%) invert(41%) sepia(10%) saturate(742%)
      hue-rotate(172deg) brightness(86%) contrast(87%);
  }

  &:not(disabled) {
    filter: brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(234%)
      hue-rotate(166deg) brightness(95%) contrast(88%);
  }
`;

export const FloatRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  text-align: end;

  > *:not(:first-child) {
    margin-left: 1em;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 100%;
    text-align: start;
  }
`;
