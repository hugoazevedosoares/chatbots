import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  text-align: center;
  color: white;
  line-height: 60px;
  font-size: 14px;
  margin-bottom: 1em;
`;

const Bold = styled.b`
  cursor: pointer;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <span>
        ₢2020, BLiP Todos os direitos reservados | <Bold>Termos de uso</Bold>
      </span>
    </FooterContainer>
  );
}
