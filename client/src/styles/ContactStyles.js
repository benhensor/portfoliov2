import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const ContactHeader = styled.h1`
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

export const ContactIcon = styled.img`
  width: 5em;
  height: 5em;
  margin-bottom: 1em;
  rotate: 45deg;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  color: var(--text-color-lt);
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const ValidIcon = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 2rem;
`

export const InvalidIcon = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 2rem;
`

export const ContactLabel = styled.label`
  font-size: 1.2rem;
  color: var(--text-color-soft);
  margin-left: 1rem;
  margin-bottom: 0.2em;
`

export const ContactInput = styled.input`
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
`

export const ContactTextarea = styled.textarea`
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
`

export const ContactButton = styled.button`
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

export const ContactStatus = styled.p`
  font-size: 1.2em;
  color: ${({ $success }) => ($success ? 'green' : 'red')};
  margin-top: 1em;
`

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.8rem;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  margin-left: 1rem;
`
