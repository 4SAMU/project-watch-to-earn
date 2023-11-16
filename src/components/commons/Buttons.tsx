import { Button, styled } from "@mui/material";

const buttonStyle = {
  color: "#FFFFFF",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "24px",
};

export const BluishButton = styled(Button)((props: any) => ({
  fontFamily: props.theme.typography.fontFamily,
  background: "#1DAAB1",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#1DAAB1",
  },
  ...buttonStyle,
}));

export const DarkButton = styled(Button)((props: any) => ({
  background: props.theme.palette.secondary.main,
  fontFamily: props.theme.typography.fontFamily,
  textTransform: "none",
  "&.active": {
    background: "#09090D",
  },
  "&:hover": {
    backgroundColor: props.theme.palette.secondary.main,
  },
  ...buttonStyle,
}));
