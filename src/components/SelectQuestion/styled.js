import { styled } from "../../theme";
import {
  Dialog,
  Pane,
  Text as TextEvergreen,
  Button as ButtonEvergreen,
  ChevronUpIcon,
  ThListIcon,
} from "evergreen-ui";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",

  // backgroundColor: "blue",
});

export const ContainerHeader = styled("div", {
  marginTop: "-4.7rem",
  border: "1px solid $grey700",
});

export const BoxSelectQuestion = styled(Dialog, {
  border: "1px solid $grey700",
  // position: "fixed",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // backgroundColor: "red",
});

export const ContentBoxSelectionQuestion = styled(Pane, {
  width: "59vw",
  height: "68rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",

  marginTop: "5rem",

  borderRadius: "none",
  // backgroundColor: "red",
});

export const Header = styled(Pane, {
  height: "5vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginTop: "0.5rem",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$grey600",
});

export const IconButton = styled("button", {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",

  backgroundColor: "$cyan300",
});

export const Icon = styled(ChevronUpIcon, {
  color: "$white",
});

export const Content = styled(Pane, {
  // backgroundColor: "pink",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
});

export const SubTitle = styled(Pane, {
  // backgroundColor: "pink",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "0.1rem",
});

export const BoxIconList = styled("div", {
  width: "2.8rem",
  height: "2.8rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  margin: "1rem",

  backgroundColor: "$grey200",
});

export const IconList = styled(ThListIcon, {
  color: "$white",
});

export const Text = styled("p", {
  color: "$grey600",
  fontSize: "$sm",
  fontWeight: "bold",
});

export const Button = styled(ButtonEvergreen, {
  marginTop: "3rem",
  marginLeft: "0.5rem",
});

export const ContainerButtons = styled("div", {
  marginTop: "0.1rem",
  height: "15rem",
  padding: "1rem",

  // display: "flex",
  // flexDirection: "row",
  // justifyContent: "space-between",
  display: "grid",
  gridTemplateColumns: "20rem 20rem 20rem 20rem",
  columnGap: "0.7rem",

  // flexWrap: "wrap",
});

export const ButtonsNextPrevious = styled("div", {
  // backgroundColor: "$grey300",
  marginTop: "0.6rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  width: "100%",
  height: "2rem",
  display: "flex",
  justifyContent: "space-between",
});
