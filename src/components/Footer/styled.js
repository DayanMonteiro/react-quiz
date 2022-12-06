import { styled } from "../../theme";

export const Container = styled("div", {
  marginTop: 0,
  width: "100vw",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "$sky700",
});

export const Logo = styled("img", {
  width: "10rem",

  "@desktop": {
    width: "15rem",
  },
});

export const Text = styled("p", {
  color: "$white",
  fontSize: "$md",
});
