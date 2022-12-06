import React, { useState } from "react";
import * as S from "./styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SelectQuestion from "../../components/SelectQuestion";
import ImageSuper from "../../assets/img/super-ensino-home.svg";
import SchoolSubjects from "../../mocks/school-subjects.json";

const Home = () => {
  const [courses] = useState(SchoolSubjects);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.TextContainer>
          <S.Title>Bem vindo a Super Ensino</S.Title>
          <S.SubTitle>
            Selecione uma das disciplinas e inicie seu teste
          </S.SubTitle>
        </S.TextContainer>

        <S.AboutContainer>
          <S.Image src={ImageSuper} />
          <S.AboutText>
            <S.Text>
              Plataforma digital Super Ensino desenvolvida para elevar
              estudantes ao próximo nível
            </S.Text>
            <S.Text>
              Você já sabe: Super Ensino é a plataforma digital de reforço
              escolar mais completa do norte do Brasil.
            </S.Text>
            <S.Text>
              Direcionada ao Ensino Fundamental, ela reúne tecnologia e didática
              para ajudar os estudantes a aprofundar seu conhecimento nas
              matérias vistas em sala de aula.
            </S.Text>
            <S.Text>
              Com a Super Ensino, os estudantes melhoram seu desempenho e os
              professores e gestores de educação contam com a tecnologia para
              potencializar seus resultados pedagógicos — incluindo o Sistema de
              Avaliação da Educação Básica (Saeb).
            </S.Text>
          </S.AboutText>
        </S.AboutContainer>

        <S.SelectDiscipline>
          <S.Text>Click na disciplina para iniciar seu teste</S.Text>

          <S.ButtonContainer>
            {!!courses &&
              courses.map((course) => <SelectQuestion course={course} />)}
          </S.ButtonContainer>
        </S.SelectDiscipline>
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Home;
