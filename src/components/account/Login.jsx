
import React from 'react'
import { useState } from 'react'
import {Box , TextField , Button , styled} from '@mui/material'
import './Login.css'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    height:560px;
`

function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

      const [account ,setAccount] = useState('login');

    const LoginButton = styled(Button)`
      text-transform:none;
      background: #FB641B;
      height: 48px;
      width : 100%;
      box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
    `
    const SignUp = styled(Button)`
      text-transform:none;
      height: 48px;
      width : 100%;
    `
    function handlClick() {
      account === 'login' ? setAccount('signup') : setAccount('login')
    }
  return (
    <Component>
            <img src={imageURL} alt='login' />
            {
              account === 'login' ?
              <div>
              <TextField variant='standard' label='Enter Username'/>
              <TextField variant='standard'
                label='Enter Password'
              />
              <LoginButton variant="contained" >Login</LoginButton>
              <p style={{fontSize:"1rem" , fontWeight:"bold"}}>OR</p>
              <SignUp onClick={handlClick}>Create an account</SignUp>
            </div>
            :
              <div>
              <TextField variant='standard' label='Enter Name'/>
              <TextField variant='standard' label='Enter Username'/>
              <TextField variant='standard'
                label='Enter Password'
              />
              <SignUp >SignUp</SignUp>
              <p style={{fontSize:"1rem" , fontWeight:"bold"}}>OR</p>
              <LoginButton variant="contained" onClick={handlClick}>Already have an account</LoginButton>
            </div>
            }
    </Component>
  )
}

export default Login