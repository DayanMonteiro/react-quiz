import { styled } from "../../theme";

export const Container = styled("div", {
  marginTop: 0,
  width: "100vw",
  height: "8vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

export const Logo = styled("img", {
  width: "10rem",

  "@desktop": {
    width: "15rem",
  },
});
