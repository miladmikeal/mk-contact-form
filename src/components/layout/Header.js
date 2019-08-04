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

const Header = props => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} position="static" color={props.color}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <Icon className={classes.icon}>{props.icon}</Icon>
        </Typography>
        <Typography variant="h6" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
