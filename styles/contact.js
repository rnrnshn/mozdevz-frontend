import styled from "styled-components";


export const ContactPage = styled.div`
.contactContainer {
  background-color: var(--light-grey);
  padding: 2rem;
}

.contactDetails {
  margin-bottom: 2rem;
}

.contactDescription {
  margin-bottom: 2rem;
}

.contactTitle {
  font-size: 1.5rem;
}

.contactText {
  font-size: 0.8rem;
}

.contactInfo {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.contactLabel {
  display: flex;
  background-color: var(--white);
  gap: 1rem;
  padding: 1rem;
}

.text {
  font-size: 0.6rem;
}

.contactSocials {
  display: flex;
  gap: 1rem;
}

.socialIcon {
  background-color: var(--primary);
  display: block;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.icon {
  width: 0.8rem;
}

/* Contact Form */
.contactForm {
  background-color: var(--white);
  padding: 1.5rem;
}

.form {
}

.input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  input {
  border: none;
  border: 1px solid var(--secondary);
  height: 2.5rem;
  }
  textarea {
  border: none;
  border: 1px solid var(--secondary);
  height: 8rem;
  resize: none;
  }

}



@media (min-width: 720px) {
  .contactContainer {
    padding: 4rem;
    display: flex;
    gap: 4rem;
  }

  .contactDetails,
  .contactForm {
    flex-basis: 50%;
  }

  .contactTitle {
    font-size: 2.5rem;
  }

  .contactDetails {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: unset;
  }

  .contactLabel {
    width: 90%;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 0.8rem;
  }

  .socialIcon {
    width: 2rem;
    height: 2rem;
  }

  .icon {
    width: 1rem;
  }

  .contactForm {
    padding: 3rem;
  }
}

`

