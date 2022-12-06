import { styled } from "../../theme";

export const Button = styled("button", {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  fontFamily: "$sans",
  fontWeight: "$regular",
  fontSize: "$sm",
  transition: "background-color 300ms ease",
  width: "100%",

  variants: {
    variant: {
      borderCyan: {
        width: "20rem",
        height: "3rem",
        color: "$grey800",
        backgroundColor: "$white",
        border: "0.1rem solid $cyan300",
        borderRadius: "0.4rem",

        "&:hover": {
          color: "$grey300",
          backgroundColor: "$cyan200",
        },
      },
      iconButton: {
        width: "10rem",
        height: "2rem",
        padding: "8px 0",
        color: "$white",
        backgroundColor: "$cyan300",
        fontWeight: "$bold",
        fontSize: "$xs",
        borderRadius: "0.4rem",

        "&:hover": {
          color: "$cyan300",
          backgroundColor: "$cyan100",
        },
      },
      link: {
        padding: "8px 0",
        color: "$primary500",
        textDecoration: "underline",
      },
    },
    size: {
      small: {
        fontSize: "$xxs",
        padding: "4px 24px",
        height: "3rem",
      },
    },
    active: {
      true: { color: "$white", backgroundColor: "$cyan200" },
    },
  },
});
