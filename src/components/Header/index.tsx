import React from "react";
import styled from "styled-components";
import Logo from "../../resources/images/logo.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  text-align: center;
  background-color: #1a2437;
  color: white;
  line-height: 60px;
  font-size: 16px;
`;

const Image = styled.img``;

export default function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <Image src={Logo} alt={"Blip"} />
      </a>
    </HeaderContainer>
  );
}
