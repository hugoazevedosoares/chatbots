import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Contact } from "../../types/contact";
import { findContactByShortName } from "../../services/contactService";
import Blip from "../../resources/images/blip.png";
import User from "../../resources/images/user.png";
import Union from "../../resources/images/union.png";
import Sent from "../../resources/images/sent.png";
import Balloon from "../../resources/images/plano.png";
import Separator from "../../components/Separator";
import {
  CardsContainer,
  ChatBotContainer,
  ChatBotHeader,
  DateTime,
  Image,
  Name,
  ShortName,
  InfoCard,
  ImageWithDoubleText,
  AccountStatus,
  PlanImage,
  LocationText,
} from "./styles";
import Button from "../../components/Button";
import languageTags from "language-tags";

function getTimeZone({ created }: Contact) {
  const offset = -(new Date(created).getTimezoneOffset() / 60);

  return `[UTC${offset}:00]`;
}

function getLanguageAndLocationData(contact: Contact) {
  const langShortName = contact.culture.slice(0, 2).toLocaleUpperCase();
  const language = languageTags.language(langShortName).descriptions()[0];
  const country = contact.culture.slice(3, 5);
  const timezone = getTimeZone(contact);

  return { timezone, langShortName, language, country };
}

const ChatBot: React.FC = () => {
  const [contact, setContact] = useState<Contact>();
  const { shortName } = useParams();

  useEffect(() => {
    findContactByShortName(shortName!).then(setContact);
  }, [shortName]);

  if (!contact) {
    return <Name>Ops, not found!</Name>;
  }

  const {
    timezone,
    langShortName,
    language,
    country,
  } = getLanguageAndLocationData(contact);

  return (
    <ChatBotContainer>
      <ChatBotHeader>
        <ImageWithDoubleText>
          <Image src={Blip} alt="BLiP" bg="#dee8ec" />
          <Name>{contact.name}</Name>
          <ShortName>id: {contact.shortName}</ShortName>
        </ImageWithDoubleText>

        <DateTime>
          Created at {new Date(contact.created).toLocaleDateString()}
        </DateTime>
      </ChatBotHeader>
      <CardsContainer>
        <InfoCard area="region" style={{ justifyContent: "center" }}>
          <ShortName>Region and idiom</ShortName>
          <LocationText>
            {country} - {language} ({langShortName})
          </LocationText>
          <br />
          <ShortName>Timezone</ShortName>
          <LocationText>{timezone}</LocationText>
        </InfoCard>

        <InfoCard area="active">
          <ImageWithDoubleText>
            <Image src={User} alt="BLiP" bg="#2cc3d5" />
            <Name>{contact.analytics.user.total}</Name>
            <ShortName>Active users</ShortName>
          </ImageWithDoubleText>
        </InfoCard>

        <InfoCard area="received">
          <ImageWithDoubleText>
            <Image src={Union} alt="BLiP" bg="#4dcb7b" />
            <Name>{contact.analytics.message.received}</Name>
            <ShortName>Received Messages</ShortName>
          </ImageWithDoubleText>
        </InfoCard>

        <InfoCard area="sent">
          <ImageWithDoubleText>
            <Image src={Sent} alt="BLiP" bg="#517bf2" />
            <Name>{contact.analytics.message.sent}</Name>
            <ShortName>Sent Messages</ShortName>
          </ImageWithDoubleText>
        </InfoCard>

        <AccountStatus>
          <PlanImage src={Balloon} alt="plan" />
          <ShortName>Status Account</ShortName>
          <Name style={{ textTransform: "capitalize" }}>{contact.plan}</Name>
          <Button className="active" style={{ margin: "2em auto" }}>
            Update account
          </Button>
        </AccountStatus>
      </CardsContainer>

      <Separator />
    </ChatBotContainer>
  );
};

export default ChatBot;
