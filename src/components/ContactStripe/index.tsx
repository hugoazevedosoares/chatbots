import React from "react";
import { ContactBlockProps } from "../../types/contact";
import { StyledLink } from "../BaseContactComponents";
import { Stripe, StripeContainer, Image, Name, Created } from "./styles";
import FavoriteToggle from "../FavoriteToggle";

const ContactStripe: React.FC<ContactBlockProps> = ({
  contact,
  handleFavorite,
}) => {
  return (
    <StripeContainer>
      <FavoriteToggle
        contact={contact}
        handleFavorite={handleFavorite}
        style={{ gridArea: "fav", marginTop: "-0.2em" }}
      />
      <Stripe>
        <StyledLink to={contact.shortName}>
          <Image src={contact.image} alt={contact.name} />
          <Name>{contact.name}</Name>
          <Created>
            Created at {new Date(contact.created).toLocaleDateString()}
          </Created>
        </StyledLink>
      </Stripe>
    </StripeContainer>
  );
};

export default ContactStripe;
