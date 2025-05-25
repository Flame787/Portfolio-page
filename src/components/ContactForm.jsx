import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const [captchaToken, setCaptchaToken] = useState(null);

 const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // NEW:
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

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
      setCaptchaToken(null);
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

      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={handleCaptchaChange}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, mb: 3 }}>
        Send Email
      </Button>
    </Box>
  );
}

/*  ########################## EmailJS #######################################

EmailJS limit: 200 emails/month

install npm package:
npm install emailjs-com -> deprecated: The SDK name changed: npm install @emailjs/browser

https://dashboard.emailjs.com/admin/

- Email Services: 
here is my email & Service ID
- if existing email is not working - cannot send test-email (after longer period of time):
-> click on Disconnect,
then https://myaccount.google.com/permissions - find EmailJS on the list, remove permissions from EmailJS,
then click to Connect again (on EmailJS),
go through Gmail permissions steps again, enable to send test-email
-> email will work again (and be added to Gmail permissions automatically)

- Email Templates: 
easy to edit a template in which we receive the email from the page. 
- Important: each 'name:'-value from the email-form in React must be the same like the variables in the template.
- Important: include name: 'from_email' both as input-field in form (required), and in received-email-template.
- example of my template: 

    Hello,
    You got a new message from {{from_name}} - {{from_email}}:
    Title: {{subject}}
    {{message}}

    Best wishes,
    EmailJS team 

- Email Templates -> Settings:
Enable reCAPTCHA V2 verification <- select this.
After logging in to Captcha and aquiring the key, enter the reCAPTCHA Secret Key here. 

- Account -> General:
API keys: Public key - needed for React app -> add to .env file
Private key (also there, but not needed for the app)

- Account -> Security:
Domain (can stay empty), 
API settings: Use private key - select this option.

########################## CAPTCHA #######################################

Visit:
https://www.google.com/recaptcha/admin/create

Add a domain - just domain without https/... (or just: localhost).
Get a Site key -> save it to .env file.
Get a Secret key - enter it on EmailJS page.

install npm package:
npm install react-google-recaptcha

*Adding/changing a new domain (f.e. production domain) on Capcha:
https://www.google.com/recaptcha/admin
- select label of my current project (my portfolio contact form)
- Settings (right gear wheel)
- Domains: Add a domain
- a domain should be added without http/..., just domain - examples:
  localhost
  my-app.netlify.app
  my-app.vercel.app
  myportfolio.com
-Save

Captcha token expires after 2 min. 

**OPTIONAL - Adding new domain (f.e. production domain) to EmailJS:
https://dashboard.emailjs.com/admin/
- Account
- Security (up right)
- Domains
** currently no domains are set - not mandatory, but it could be restricted to 'localhost/3000' or some other domain.
Domain includes schema, host and port if present - different than on reCaptcha page.

 */
