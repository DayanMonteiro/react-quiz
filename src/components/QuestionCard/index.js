import React from "react";
import * as S from "./styled";
import CheckInput from "../Check";

const QuestionCard = ({ activeQuestion, toggleAnswer }) => {
  console.log("activeQuestion", activeQuestion);

  return (
    !!activeQuestion && (
      <S.Container>
        <S.Header>
          <S.Id>{activeQuestion?.id}</S.Id>
          <S.NumberQuestion>
            Exercício {activeQuestion?.["number-question"]}/11
          </S.NumberQuestion>
        </S.Header>
        <S.Content>
          <S.Title> (SUPER ENSINO) {activeQuestion?.title}</S.Title>
          <S.Options>
            <S.Description>{activeQuestion?.["description-one"]}</S.Description>
            <S.Description>{activeQuestion?.["description-two"]}</S.Description>
            <S.Description>
              {activeQuestion?.["description-three"]}
            </S.Description>
          </S.Options>
          <S.SubTitle>{activeQuestion?.["sub-title"]}</S.SubTitle>

          <S.BoxAnswer>
            {activeQuestion?.answers.map((answer) => (
              <S.ContainerAnswer>
                <CheckInput
                  value={answer.title}
                  onClick={() => toggleAnswer(activeQuestion.id, answer.id)}
                  checked={answer.checked}
                />

                <S.Answer>{answer.text}</S.Answer>
              </S.ContainerAnswer>
            ))}
          </S.BoxAnswer>
        </S.Content>
      </S.Container>
    )
  );
};

export default QuestionCard;
