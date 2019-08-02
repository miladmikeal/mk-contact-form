import React from 'react'
import { AppBar, Toolbar, Typography, Icon, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appbar: {
    margin: 0
  },
  icon: {
    marginRight: '10px',
    marginTop: '5px'
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <Icon className={classes.icon}>contact_mail</Icon>
        </Typography>
        <Typography variant="h6" color="inherit">
          Contact Form
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
