import { styled } from "../../theme";

export const InputBox = styled("button", {
  marginTop: 0,
  minWidth: "1.7rem",
  minHeight: "1.7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid $grey300",
  borderRadius: "0.2rem",
  cursor: "pointer",

  variants: {
    color: {
      cyan: {
        backgroundColor: "$cyan400",
      },
      grey: {
        backgroundColor: "$grey200",
      },
    },
  },
});

export const Paragraph = styled("p", {
  color: "$white",
  fontSize: "$sm",
});
