import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.button,
  backgroundImage:
    "linear-gradient(to bottom,rgba(19, 145, 203, 0.88), rgba(0, 98, 138, 0.95))",
  backgroundColor: "rgba(19, 145, 203, 0.95)", // fallback

  boxShadow:
    "2px 2px 6px 0 rgba(76, 201, 254, 0.15), 0 6px 20px 0 rgba(76, 201, 254, 0.15)",

  "&:hover": {
    // backgroundColor: theme.palette.primary.button2,
    backgroundImage:
      "linear-gradient(to bottom,  rgba(1, 124, 172, 0.95), rgba(0, 60, 95, 1))",
    backgroundColor: "rgba(0, 60, 95, 1)",
  },
}));

export default CustomButton;
