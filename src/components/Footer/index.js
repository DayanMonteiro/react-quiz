import React from "react";
import * as S from "./styled";
import LogoWhite from "../../assets/img/super-ensino-white.svg";

const Footer = () => {
  return (
    <S.Container>
      <S.Logo src={LogoWhite} />
      <S.Text>Super Ensino Ltda ME CNPJ: 10.234.723/0001-09</S.Text>

      <S.Text>
        Av. Rio Madeira, 998 - Nossa Sra. das Gracas, Manaus - AM, 69053-030
      </S.Text>
    </S.Container>
  );
};

export default Footer;
