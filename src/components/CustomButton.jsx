import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.button,

  "&:hover": {
    backgroundColor: theme.palette.primary.button2,
  },
}));

export default CustomButton;
