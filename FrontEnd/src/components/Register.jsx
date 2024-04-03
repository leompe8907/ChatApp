import React from 'react'
import {TextField, Button} from '@mui/material';

export default function Register() {

  const handleFromSubmit = () =>{
    fetch("http://127.0.0.1:8000/accounts/register/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
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
        <div className='mt-4'>
          <TextField id="first_name" type='text' label="First Name" variant="outlined" />
        </div>
        <div className='mt-4'>
          <TextField id="last_name" type='text' label="Last Name" variant="outlined" />
        </div>
        <div className='mt-3'>
          <Button onClick={handleFromSubmit} variant="contained" color="primary">
            Register
          </Button>
        </div>
      </div>
    </>
  )
}
