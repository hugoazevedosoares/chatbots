import React from "react";

import { ContactBlockProps } from "../../types/contact";
import { Card } from "../BaseCard";
import { StyledLink } from "../BaseContactComponents";
import FavoriteToggle from "../FavoriteToggle";
import { BotName, Image, ShortName } from "./styles";

const ContactCard: React.FC<ContactBlockProps> = ({
  contact,
  handleFavorite,
}) => {
  return (
    <Card>
      <FavoriteToggle contact={contact} handleFavorite={handleFavorite} />
      <StyledLink
        to={contact.shortName}
        style={{
          textDecoration: "none",
          cursor: "default",
          color: "unset",
        }}
      >
        <Image src={contact.image} alt={contact.name} />
        <BotName>{contact.name}</BotName>
        <ShortName>{contact.shortName}</ShortName>
      </StyledLink>
    </Card>
  );
};

export default ContactCard;
