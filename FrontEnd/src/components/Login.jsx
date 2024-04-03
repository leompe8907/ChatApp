import React from 'react'
import {TextField, Button} from '@mui/material';

function Login() {
  const handleSubmit = (e) => {
    fetch("http://127.0.0.1:8000/accounts/login/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        })
      })
      .then(response => response.json())
      .then(data => {
      console.log(data);
      })
      .catch(error => {
      console.log(error);
      });
    }
  return (
    <>
      <div className='container text-center'>
        <div className='mt-4'>
          <TextField id="email" type='email' label="Email" variant="outlined" />
        </div>
        <div className='mt-4'>
          <TextField id="password" type='password' label="Password" variant="outlined" />
        </div>
        <div className='mt-3'>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
