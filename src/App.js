import React, { Fragment } from 'react'
import './App.css'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import Header from './components/layout/Header'
import Form from './components/Form'

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#f6f6f6'
  }
})

function App() {
  const classes = useStyles()
  return (
    <Fragment>
      <Header color="primary" title="MK DECISION" />
      <div style={{ marginTop: 120 }}>
        <Container spacing={40} fixed>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={6}>
              <Header color="primary" title="Contact Form" icon="contact_mail" />
              <Paper elevation={0} square={true} className={classes.paper}>
                <Form />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment >
  );
}

export default App;
