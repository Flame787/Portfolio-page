import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

export default function ContactForm(){

    const {
        register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset
    } = useForm();


    const onSubmit = (data) => {
        const serviceId = 'service_id';
        const templateId = 'template_id';
        const userId = 'user_id';  // public key

        emailjs.send(serviceId, templateId, data, userId ). then(() => {
            reset();
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
        })

    }

    return(

        <Container>
            <Typography variant="h4">
                Contact me
            </Typography>

        </Container>


    );
}