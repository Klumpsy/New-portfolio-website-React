import React, { FormEvent, useState, useRef} from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => { 

    const formId = "dJpkkN51"
    const formSparkUrl = `https://submit-form.com/${formId}`
    const recaptchaKey = '6LfNhF0cAAAAADAGEqRXZANeLU-lVd1YHoIr-9ql';
    const recaptchaRef = useRef(); 

    //State
    const initialFormState = { 
        email: "",
        name: "",
        message: ""
    }

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(); 
    const [recapchaToken, setRecapchaToken] = useState()


    const submitForm = async (event, FormEvent) => { 
        event.preventDefault();
        setSubmitting(true);
        await postSubmission(); 
        setSubmitting(false); 
    }
    
    const postSubmission = async () => { 
        const payload = { 
           ...formState,
           "g-recaptcha-response": recapchaToken
        }

    try { 
        const result = await axios.post(formSparkUrl, payload)
        console.log(result) //check for 200 message
        setMessage({ 
            class: 'succes',
            text: "Thank you for your message! I'll be in touch."
        })
        setFormState(initialFormState); 
        recaptchaRef.current.reset();
        } 
        catch(error) 
        { 
        console.log(error); //log errors if there are any
        setMessage({ 
            class: 'failed',
            text: "Oops.. Something went wrong, please try again."
        })
        }
    };

    const updateFormControl = (event) => { 
        const {id, value} = event.target; 
        const formKey = id;
        const updateFormState = {...formState}; 
        updateFormState[formKey] = value; 
        setFormState(updateFormState); 
    }

    const updateRecaptchaToken = (token) => { 
        setRecapchaToken(token); 
    };

    return (
        <div className ="contact-container" id='Contact'>
            <h1>Contact</h1>
            <div className = "contact-form">
            {message && <div className={message.class}>{message.text}</div>} 
            <form  onSubmit={submitForm}>
                <div className = "contact-name-field">
                    <label>Name</label>
                    <input type = 'text' 
                           id='name' 
                           value={formState.name}
                           onChange={updateFormControl}>
                           </input>
                </div>
                <div className = "contact-email-field">
                    <label>E-mail</label>
                    <input type='email' 
                           id='email' 
                           value={formState.email}
                           onChange={updateFormControl}>
                           </input>
                </div>
                <div className = "contact-message-field">
                    <label>Message</label>
                    <textarea
                     id='message' 
                     value={formState.message}
                     onChange={updateFormControl}>
                    </textarea>
                </div>
                <ReCAPTCHA
                ref={recaptchaRef}
                sitekey = {recaptchaKey}
                onChange={updateRecaptchaToken}
                />
                <button disabled={submitting}>{submitting ? "Sending..." : "Send message"}</button>
            </form>
            </div>
        </div>
    )
}

export default Contact