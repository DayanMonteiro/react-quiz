import React from "react";
import * as S from "./styled";
import LogoColor from "../../assets/img/super-ensino-color.png";

const Header = () => {
  return (
    <S.Container>
      <S.Logo src={LogoColor} />
    </S.Container>
  );
};

export default Header;
