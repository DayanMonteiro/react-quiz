import { styled } from "../../theme";

export const Container = styled("div", {
  width: "35vw",
  marginTop: "0.2rem",
  padding: "1rem",
  maxHeight: "42rem",
  border: "1px solid $grey700",

  // backgroundColor: "red",

  overflowX: "auto",
});

export const Header = styled("div", {
  paddingTop: "0.5rem",
  display: "flex",
  alignItems: "center",
});

export const Id = styled("h1", {
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
  color: "$grey200",
  fontSize: "$md",
});

export const NumberQuestion = styled("h1", {
  color: "$cyan400",
  fontSize: "$md",
});

export const Content = styled("div", {});

export const Title = styled("p", {
  paddingLeft: "1rem",
  paddingTop: "0.5rem",
  color: "$grey700",
  fontSize: "$md",
  textAlign: "justify",
});

export const Options = styled("div", {});

export const Description = styled("p", {
  paddingLeft: "1rem",
  paddingTop: "1.3rem",
  color: "$grey700",
  fontSize: "$md",
  textAlign: "justify",
});

export const SubTitle = styled("p", {
  paddingLeft: "1rem",
  paddingTop: "1.3rem",
  color: "$grey700",
  fontSize: "$md",
  textAlign: "justify",
});

export const BoxAnswer = styled("div", {
  paddingTop: "1rem",
  // height: "8rem",
  // backgroundColor: "red",
});

export const ContainerAnswer = styled("div", {
  paddingLeft: "1rem",
  paddingTop: "0.5rem",
  display: "flex",
  alignItems: "flex-start",
  textAlign: "justify",
  // height: "4rem",
});

export const Answer = styled("p", {
  paddingLeft: "1.3rem",
  color: "$grey700",
  fontSize: "$md",
  textAlign: "justify",
});
