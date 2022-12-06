import React from "react";
import * as S from "./styled";

const CheckInput = (prop) => {
  return (
    <S.InputBox {...prop} color={prop.checked ? "cyan" : "grey"}>
      <S.Paragraph>{prop?.value}</S.Paragraph>
    </S.InputBox>
  );
};

export default CheckInput;
