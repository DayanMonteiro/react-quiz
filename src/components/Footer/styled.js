import { styled } from "../../theme";

export const Container = styled("div", {
  width: "100%",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "$sky700",
});

export const Logo = styled("img", {
  width: "15rem",
});

export const Text = styled("p", {
  color: "$white",
  fontSize: "$md",
});
