import React, { forwardRef, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'
import MailIcon from '../assets/icons/mailPlane.svg'
import { FcCheckmark } from "react-icons/fc";

const Contact = forwardRef((props, ref) => {

  const { setActiveLink } = props
  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { amount: 0.5 })

  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [buttonText, setButtonText] = useState('SEND')
  const [formErrors, setFormErrors] = useState({})
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (isInView) {
      setActiveLink('contact')
    }
  }, [isInView, setActiveLink])

  const updateForm = (e) => {
    const { name, value } = e.target
    setFormDetails({
      ...formDetails,
      [name]: value
    })
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    try {
      const errors = validate(formDetails)
      if (Object.keys(errors).length) {
        setFormErrors(errors)
        return
      }
      setButtonText('SENDING...')
      const reponse = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails) 
      })
      const result = await reponse.json()
      setFormDetails({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setStatus(result)
    } catch (error) {
      console.error('Submission error:', error)
      setStatus({ success: false, message: 'Submission failed. Please try again.' })
    } finally {
      setButtonText('SEND')
    }
  }

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d{9,16}/g.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    return errors;
  };


  return (
    <Page ref={ref} id="contact">
      <ContactSection>
        <ContactContent ref={contactRef}>
          <ContactHeader><span><ContactIcon src={MailIcon} alt='Mail Icon' /></span>Contact Me</ContactHeader>
          
          <ContactForm onSubmit={submitEmail}>
            <ContactLabel htmlFor='name'>Name</ContactLabel>
            <InputWrapper>
              <ContactInput
                type='text'
                name='name'
                value={formDetails.name}
                onChange={updateForm}
                placeholder='Name'
                required
                style={{border: formErrors.name ? '1px solid var(--error)' : '1px solid var(--blue)'}}
              />
              {formErrors.phone ? null : formDetails.phone.match(/^\d{9,16}$/g) && <ValidIcon><FcCheckmark /></ValidIcon>}
            </InputWrapper>
            <ContactLabel htmlFor='email'>Email</ContactLabel>
            <InputWrapper>
              <ContactInput
                type='email'
                name='email'
                value={formDetails.email}
                onChange={updateForm}
                placeholder='Email'
                required
                style={{border: formErrors.email ? '1px solid var(--error)' : '1px solid var(--blue)'}}
              />
              {formErrors.phone ? null : formDetails.phone.match(/^\d{9,16}$/g) && <ValidIcon><FcCheckmark /></ValidIcon>}
            </InputWrapper>
            <ContactLabel htmlFor='phone'>Phone</ContactLabel>
            <InputWrapper>
              <ContactInput
                type='tel'
                name='phone'
                value={formDetails.phone}
                onChange={updateForm}
                placeholder='Phone'
                style={{border: formErrors.phone ? '1px solid var(--error)' : '1px solid var(--blue)'}}
              />
              {formErrors.phone ? null : formDetails.phone.match(/^\d{9,16}$/g) && <ValidIcon><FcCheckmark /></ValidIcon>}
            </InputWrapper>
            <ContactLabel htmlFor='message'>Message</ContactLabel>
            <InputWrapper>
              <ContactTextarea
                name='message'
                value={formDetails.message}
                onChange={updateForm}
                placeholder='Message'
                required
              />
              {formErrors.phone ? null : formDetails.phone.match(/^\d{9,16}$/g) && <ValidIcon><FcCheckmark /></ValidIcon>}
            </InputWrapper>
            <ContactButton type='submit' aria-label="Send">{buttonText}</ContactButton>
          </ContactForm>
          {status.message && <ContactStatus>{status.message}</ContactStatus>}
        </ContactContent>
      </ContactSection>
    </Page>
  )
})

export default Contact


const ContactSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-lt);
  margin-bottom: 1em;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-right: 0.5em;
  }
`

const ContactIcon = styled.img`
  width: 5em;
  height: 5em;
  margin-bottom: 1em;
  rotate: 45deg;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  color: var(--text-color-lt);
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

const ValidIcon = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 2rem;
  display: none;
`

const ContactLabel = styled.label`
  font-size: 1.2rem;
  color: var(--text-color-soft);
  margin-left: 1rem;
  margin-bottom: 0.2em;
`

const ContactInput = styled.input`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  border-radius: 0.5rem;
  border: 1px solid var(--blue);
  margin-bottom: 1em;
  background: var(--background-static);
  &::placeholder {
    color: var(--text-color-dk);
  }
  &:focus {
    outline: none;
  }
  &:valid {
    border: 2px solid green;

    /* Show the tick icon when the input is valid */
    ~ ${ValidIcon} {
      display: block;
    }
  }
`

const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  border-radius: 0.5rem;
  resize: vertical;
  min-height: 10em;
  margin-bottom: 3em;
  border: 1px solid var(--blue);
  margin-bottom: 1em;
  background: var(--background-static);
  &::placeholder {
    color: var(--text-color-dk);
  }
  &:focus {
    outline: none;
  }
  &:valid {
    border: 2px solid green;

    /* Show the tick icon when the input is valid */
    ~ ${ValidIcon} {
      display: block;
    }
  }
`

const ContactButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 0.5rem;
  background: var(--orange);
  color: var(--text-color-dk);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: var(--ltOrange);
    color: var(--text-color-dk);
  }
`

const ContactStatus = styled.p`
  font-size: 1.2em;
  color: var(--text-color-lt);
`

