import React, { useState } from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Icon
} from "@material-ui/core"



const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}
    >
      <form style={{ width: "50%" }}>
        <h1>Contact Form</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" onChange={handleChange('name')} />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" onChange={handleChange('email')} />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="message">Message</InputLabel>
          <Input id="message" onChange={handleChange('message')} multiline rows={10} />
        </FormControl>

        <Button variant="contained" color="primary" size="medium">
          Send <Icon style={{ marginLeft: 5 }}>send</Icon>
        </Button>
      </form>
    </div>
  )
}



export default Form
