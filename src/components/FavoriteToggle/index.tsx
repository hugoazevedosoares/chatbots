import React from "react";
import styled from "styled-components";
import Favorite from "../../resources/images/favorite.png";
import Star from "../../resources/images/star.png";
import { ContactBlockProps } from "../../types/contact";

const Image = styled.img`
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  top: 1em;
  cursor: pointer;
`;

const FavoriteToggle: React.FC<
  ContactBlockProps & { alt?: string; style?: object }
> = ({ contact, handleFavorite, style = {}, alt = "favorito" }) => {
  const src = contact.favorite ? Star : Favorite;

  function onClick(event: React.MouseEvent<HTMLImageElement>) {
    event.preventDefault();
    handleFavorite(contact, !contact.favorite);
  }

  return (
    <Image
      data-testid="image"
      onClick={onClick}
      src={src}
      alt={alt}
      style={style}
    />
  );
};

export default FavoriteToggle;
