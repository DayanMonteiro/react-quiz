import { styled } from "../../theme";
import {
  Dialog,
  Pane,
  Button as ButtonEvergreen,
  ChevronUpIcon,
  ThListIcon,
} from "evergreen-ui";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const ContainerHeader = styled("div", {
  marginTop: "-4.7rem",
  border: "1px solid $grey700",
});

export const BoxSelectQuestion = styled(Dialog, {
  border: "1px solid $grey700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentBoxSelectionQuestion = styled(Pane, {
  width: "90rem",
  height: "unset",
  marginTop: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: "none",
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
  cursor: "pointer",
});

export const Icon = styled(ChevronUpIcon, {
  color: "$white",
});

export const Content = styled(Pane, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const SubTitle = styled(Pane, {
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
  display: "grid",
  gridTemplateColumns: "20rem 20rem 20rem 20rem",
  columnGap: "0.7rem",
});

export const ButtonsNextPrevious = styled("div", {
  marginTop: "0.6rem",
  width: "94%",
  height: "2rem",
  display: "flex",
  justifyContent: "space-between",
});
