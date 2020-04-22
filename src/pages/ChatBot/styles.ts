import styled from "styled-components";
import { Card } from "../../components/BaseCard";

export const ChatBotContainer = styled.div``;

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-areas: "region active active status" "received received sent status";
  gap: 1em;
  margin-bottom: 2em;

  @media (max-width: 900px) {
    grid-template-areas: "region active active" "received received sent" "status status status";
  }

  @media (max-width: 768px) {
    grid-template-areas: "region sent" "active active" "received received" "status status";
  }

  @media (max-width: 600px) {
    grid-template-areas: "region" "sent" "active" "received" "status";
  }
`;

export const ChatBotHeader = styled.header`
  display: grid;
  grid-template-areas: "main date";
`;

export const ImageWithDoubleText = styled.div`
  display: grid;
  margin: 1em 0;
  width: 10%;
  grid-area: main;
  grid-template-areas: "image name" "image shortname";
  grid-template-columns: 1fr minmax(150px, 1fr);
`;

export const Image = styled.img<{ bg: string }>`
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  width: 3em;
  height: 3em;
  object-fit: none;
  grid-area: image;
  margin-right: 1em;
`;

export const Name = styled.h3`
  grid-area: name;
  margin: 0;
`;

export const ShortName = styled.span`
  grid-area: shortname;
  font-size: 12px;
`;

export const DateTime = styled.span`
  grid-area: date;
  text-align: end;
  display: block;
  margin: auto 0;
  font-size: 12px;
`;

export const InfoCard = styled(Card)<{ area: string }>`
  width: 100%;
  height: 100%;
  max-width: unset;
  gap: 20px;
  margin: unset;
  padding: 2em;
  grid-area: ${(props) => props.area};
`;

export const AccountStatus = styled.div`
  grid-area: status;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const PlanImage = styled.img`
  object-fit: none;
`;

export const LocationText = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
