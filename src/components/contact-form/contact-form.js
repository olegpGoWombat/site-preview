import React, { useState } from "react"

import styles from "./styles.module.scss"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onSubmitHandler = e => {
    e.preventDefault()
  }

  const onChangeHandler = ({ target: { name, value } }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <form className={styles["contactForm"]} onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={onChangeHandler}
          placeholder="Name"
          required
        />

        <input
          type="text"
          value={formData.email}
          name="email"
          onChange={onChangeHandler}
          placeholder="Email"
          required
        />

        <input
          type="text"
          value={formData.message}
          name="message"
          onChange={onChangeHandler}
          placeholder="Message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
