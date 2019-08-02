import React, { useState } from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Icon,
  makeStyles,
  Typography
} from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  form: {
    width: '50%'
  },
  frame: {
    display: "flex",
    justifyContent: "center",
    margin: '10px',
    padding: '30px'
  },
  icon: {
    marginLeft: '5px'
  }
}))

const Form = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = () => {

  }

  return (
    <div className={classes.frame}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h3" color="inherit">Contact Form</Typography>
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
        <Button type="submit" fullWidth variant="contained" color="primary" size="medium">
          Send <Icon className={classes.icon}>send</Icon>
        </Button>
      </form>
    </div>
  )
}



export default Form
