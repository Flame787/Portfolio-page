import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  fontFamily: "Mulish-Extralight, sans-serif",
  fontSize: "1rem",
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

export default CustomTypography;