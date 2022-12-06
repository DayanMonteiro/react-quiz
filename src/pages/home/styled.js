import { styled } from "../../theme";

export const Container = styled("div", {});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10rem",
});

export const TextContainer = styled("div", {
  height: "12rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h1", {
  paddingLeft: "1rem",
  paddingTop: "0.5rem",
  color: "$sky700",
  fontSize: "$xl",
});

export const SubTitle = styled("p", {
  paddingLeft: "1rem",
  paddingTop: "1.3rem",
  color: "$sky700",
  fontSize: "$md",
});

export const AboutContainer = styled("div", {
  width: "100%",
  height: "28rem",
  padding: "5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const AboutText = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "5rem",
});

export const SelectDiscipline = styled("div", {
  height: "16rem",
  width: "70rem",
});

export const Text = styled("p", {
  padding: "0.7rem",
  color: "$sky700",
  fontSize: "$md",
  textAlign: "justify",
});

export const ButtonContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
});

export const Image = styled("img", {
  width: "30rem",
});
