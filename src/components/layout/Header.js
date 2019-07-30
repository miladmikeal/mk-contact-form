import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Contact Form
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
