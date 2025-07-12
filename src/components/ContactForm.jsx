import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm({ darkMode }) {
  // const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [captchaToken, setCaptchaToken] = useState(null);

  // new - for Netlify serverless (backend) functions:
  const [emailConfig, setEmailConfig] = useState(null);
  const [siteKey, setSiteKey] = useState("");

  // fetch keys via Netlify function:
  useEffect(() => {
    fetch("/.netlify/functions/emailKeys")
      .then((res) => res.json())
      .then((data) => {
        setSiteKey(data.recaptchaSiteKey);
        setEmailConfig({
          serviceId: data.emailJsServiceId,
          templateId: data.emailJsTemplateId,
          publicKey: data.emailJsPublicKey,
        });
      })
      .catch((err) => {
        console.error("Failed to fetch keys:", err);
      });
  }, []);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // recaptcha as requirement:
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    if (!emailConfig) {
      alert("Email configuration not loaded.");
      return;
    }

    emailjs
      // .sendForm(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      //   e.target,
      //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      // )
      .sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        e.target,
        emailConfig.publicKey
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
      sx={{
        backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        mb: 6,
        p: 4,
        borderRadius: 4,

        border: "1px solid transparent",
        "&:hover": {
          border: "1.3px solid rgba(76, 201, 254, 0.4)",
        },
        boxShadow:
          "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          component="img"
          // src={darkMode ? "/732.png" : "/730.png"}
          // src="/Contact-me.png"
          src={darkMode ? "/Contact-me-dark3.png" : "/Contact-me-light.png"}
          alt="code"
          sx={{
            width: "25%",
            minWidth: "108px",
            borderRadius: "6px",
            // borderRadius: "270px",
            boxShadow:
              "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 2px 5px 0 rgba(76, 201, 254, 0.19)",
          }}
        />
      </Grid>

      {/* <Typography variant="h5" fontFamily={"Kenfolg Serif"} mb={2} sx={{ textAlign: "center", color: "primary.title" }}> */}
      <Typography
        // variant="h4"
        gutterBottom
        sx={{
          mt: 4,
          mb: 4,
          textAlign: "center",
          fontSize: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
        }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        Contact me:
      </Typography>

      <CustomTextField
        label="Your Email Address"
        name="from_email"
        type="email"
        required
        darkMode={darkMode}
        sx={{ fontFamily: "Mulish-Extralight, sans-serif" }}
      />
      <CustomTextField
        label="Name"
        name="from_name"
        darkMode={darkMode}
        sx={{ fontFamily: "Mulish-Extralight, sans-serif" }}
      />
      <CustomTextField
        label="Subject"
        name="subject"
        darkMode={darkMode}
        sx={{ fontFamily: "Mulish-Extralight, sans-serif" }}
      />
      <CustomTextField
        label="Message"
        name="message"
        rows={5}
        required
        darkMode={darkMode}
        sx={{ fontFamily: "Mulish-Extralight, sans-serif" }}
      />

      {siteKey && (
        <Box
          sx={{
            mt: 2,
            mb: 2,
            fontFamily: "Mulish-Extralight, sans-serif",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleCaptchaChange}
          />
        </Box>
      )}

      <CustomButton
        type="submit"
        variant="contained"
        sx={{
          mt: 4,
          mb: 3,

          fontFamily: "TheSeasons-Regular, serif",
          letterSpacing: "0.07em",
          fontSize: "1rem",
          textTransform: "none",
          display: "block",
          mx: "auto",
        }}
        color="primary"
        // size="large"
      >
        Send <SendIcon sx={{ ml: 0.5, fontSize: "0.8rem" }} />
      </CustomButton>
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
