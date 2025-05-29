import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.button,

  boxShadow:
    "2px 2px 6px 0 rgba(76, 201, 254, 0.15), 0 6px 20px 0 rgba(76, 201, 254, 0.15)",

  "&:hover": {
    backgroundColor: theme.palette.primary.button2,
  },
}));

export default CustomButton;
