import { TextField, Button, Container, Typography, Box } from "@mui/material";
// import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Email successfully sent!");
          e.target.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={sendEmail}
      sx={{ maxWidth: 500, mx: "auto", mt: 4 }}
    >
      <Typography variant="h5" mb={2} sx={{ textAlign: "center" }}>
        Contact me:
      </Typography>
      <TextField
        fullWidth
        required
        label="Your Email Address"
        name="from_email"
        type="email"
        margin="normal"
      />
      <TextField
        fullWidth
        //   required
        label="Name"
        name="from_name"
        margin="normal"
      />
      <TextField
        fullWidth
        //   required
        label="Subject"
        name="subject"
        margin="normal"
      />
      <TextField
        fullWidth
        required
        label="Message"
        name="message"
        multiline
        rows={5}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, mb: 3 }}>
        Send Email
      </Button>
    </Box>
  );
}
