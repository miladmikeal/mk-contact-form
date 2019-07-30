import React from 'react'
import './App.css'
import { Container, Grid, Paper } from '@material-ui/core'
import Header from './components/layout/Header'
import Form from './components/Form'
import { spacing } from '@material-ui/system';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: 80 }}>
        <Container spacing={40} fixed>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={8}>
              <Paper>
                <Form />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
