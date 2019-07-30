import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Photos
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
