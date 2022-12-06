import React, { useState } from "react";
import * as S from "./styled";
import Button from "../Button";
import QuestionCard from "../QuestionCard";
import { EditIcon } from "evergreen-ui";

const SelectQuestion = ({ course }) => {
  const [questions, setQuestions] = useState(course?.questions);
  const [activeQuestion, setActiveQuestion] = useState();

  const [isShown, setIsShown] = useState(false);

  function toggleAnswer(questionId, answerId) {
    const newQuestions = questions.map((q) => {
      if (q.id === questionId) {
        const searchAnswersAlreadyChecked = q.answers.find((q) => !!q.checked);

        if (searchAnswersAlreadyChecked) {
          searchAnswersAlreadyChecked.checked = false;
        }

        q.answers.map((a) => {
          if (a.id === answerId) {
            a.checked = !a.checked;
          }

          return a;
        });
      }
      return q;
    });

    setQuestions(newQuestions);
  }

  return (
    <S.Container>
      <S.BoxSelectQuestion
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        hasFooter={false}
        hasHeader={false}
        width="63%"
      >
        <S.ContentBoxSelectionQuestion>
          <S.ContainerHeader>
            <S.Header>
              <S.Title>{course?.name}</S.Title>
              <S.IconButton onClick={() => setIsShown(false)}>
                <S.Icon />
              </S.IconButton>
            </S.Header>
            <S.Content>
              <S.SubTitle>
                <S.BoxIconList>
                  <S.IconList />
                </S.BoxIconList>
                <S.Text>{course?.["sub-title"]}</S.Text>
              </S.SubTitle>
              <S.ContainerButtons>
                {!!questions &&
                  questions.map((question) => (
                    <Button
                      variant="borderCyan"
                      key={question?.id}
                      onClick={() => setActiveQuestion(question)}
                      active={
                        question?.id === activeQuestion?.id ? "true" : "false"
                      }
                    >
                      Exercício {question?.["number-question"]}
                    </Button>
                  ))}
              </S.ContainerButtons>
            </S.Content>
          </S.ContainerHeader>

          <S.ButtonsNextPrevious>
            <Button
              variant="iconButton"
              onClick={() => {
                const previousQuestion = questions.find(
                  (q) => q.id === activeQuestion.id - 1
                );
                if (previousQuestion) {
                  setActiveQuestion(previousQuestion);
                }
              }}
            >
              Anterior
            </Button>
            <Button
              variant="iconButton"
              onClick={() => {
                const nextQuestion = questions.find(
                  (q) => q.id === activeQuestion.id + 1
                );
                if (nextQuestion) {
                  setActiveQuestion(nextQuestion);
                }
              }}
            >
              Próximo
            </Button>
          </S.ButtonsNextPrevious>

          <QuestionCard
            activeQuestion={questions.find(
              (a) => a.id === activeQuestion?.id || null
            )}
            toggleAnswer={toggleAnswer}
          />
        </S.ContentBoxSelectionQuestion>
      </S.BoxSelectQuestion>

      <S.Button
        appearance="primary"
        iconBefore={EditIcon}
        onClick={() => setIsShown(true)}
      >
        {course?.name}
      </S.Button>
    </S.Container>
  );
};

export default SelectQuestion;
