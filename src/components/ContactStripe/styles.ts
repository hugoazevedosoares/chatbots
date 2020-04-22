import styled from "styled-components";
import { BaseContactComponent } from "../BaseContactComponents";

export const StripeContainer = styled.div`
  display: grid;
  grid-template-areas: "fav content";
  grid-template-columns: 6% 94%;
  width: 100%;
  margin-bottom: 1em;
  padding: 0em 1em;
  padding-right: 0;
  position: relative;
  font-size: 14px;
`;

export const Stripe = styled(BaseContactComponent)`
  grid-area: content;
  height: 3em;
  box-shadow: 0px 0px 22px 9px #d6d9dc;
  cursor: pointer;

  a {
    display: inline-grid;
    grid-template-areas: "image name date";
    grid-template-columns: 6% 50% 44%;
    width: 100%;
    cursor: pointer;

    @media (max-width: 768px) {
      grid-template-columns: 10% 50% 40%;
    }
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 2em;
  height: 2em;
  object-fit: cover;
  grid-area: image;
  margin-top: -0.5em;
  cursor: pointer;
`;

export const Name = styled.span`
  grid-area: name;
  margin-top: -0.2em;
  cursor: pointer;
`;

export const Created = styled.span`
  grid-area: date;
  margin-top: -0.2em;
  text-align: end;
  cursor: pointer;
`;
