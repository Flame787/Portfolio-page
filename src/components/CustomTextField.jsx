import { TextField } from "@mui/material";

export default function CustomTextField({ label, name, type = "text", required = false, multiline = false, rows, darkMode }) {
  return (
    <TextField
      fullWidth
      required={required}
      label={label}
      name={name}
      type={type}
      margin="normal"
      multiline={multiline}
      rows={rows}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.form"
          },
          "&:hover fieldset": {
            borderColor: darkMode ? "rgba(89, 190, 236, 0.88)" : "rgba(52, 154, 214, 0.88)"
          },
          "&.Mui-focused fieldset": {
            color: darkMode ? "rgba(89, 190, 236, 0.88)" : "rgba(52, 154, 214, 0.88)"
          },
        },
        "& .MuiInputLabel-root": {
          color: "primary.form"
        },
        "&:hover .MuiInputLabel-root": {
          color: darkMode ? "rgba(89, 190, 236, 0.88)" : "rgba(52, 154, 214, 0.88)"
        },
        "& .Mui-focused": {
          color: darkMode ? "rgba(89, 190, 236, 0.88)" : "rgba(52, 154, 214, 0.88)"
        },
      }}
    />
  );
}