import React, { useState } from 'react'
import {
  FormControl,
  TextField,
  Button,
  Icon,
  makeStyles,
  Typography,
  Snackbar,
  IconButton
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
  },
  close: {
    padding: theme.spacing(0.5),
  }
}))

const Form = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = values

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault()
    setValues({
      name: '',
      email: '',
      message: ''
    })
    setOpen(true)

  }

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }

  return (
    <div className={classes.frame}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h3" color="primary">Contact Form</Typography>
        <FormControl margin="normal" fullWidth>
          <TextField value={name} variant="outlined" label="Name" id="name" type="text" onChange={handleChange('name')} required />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField value={email} variant="outlined" label="Email" id="email" type="email" onChange={handleChange('email')} required />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField value={message} variant="outlined" label="Message" id="message" onChange={handleChange('message')} multiline rows={10} required />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary" size="medium">
          Send <Icon className={classes.icon}>send</Icon>
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            CLOSE
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <Icon color="secondary">close</Icon>
          </IconButton>,
        ]}
      />
    </div>
  )
}



export default Form
