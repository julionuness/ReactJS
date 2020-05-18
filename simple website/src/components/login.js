import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Login extends Component 
{
  render() {
    return (
      <div className="home-grid">
        <div>
          <TextField
            id="outlined-textarea"
            label="E-mail"
            placeholder="xxx@xxxxx.com"
            multiline
            helperText="Digite o seu email"
            variant="outlined"
          />
        </div>
      
        <p><br/></p>

        <div>
          <TextField
            id="outlined-textarea"
            label="Senha"
            placeholder="xxxxxxxx"
            multiline
            helperText="Digite a sua senha"
            variant="outlined"
          />
        </div>

        <p><br/></p>

        <div>
          <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
          onClick={() => {
            alert("Muito legal");
          }}
          >
          Login
        </Button>
        </div>
      </div>
    );
  }
}

export default Login;
