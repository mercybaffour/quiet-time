import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Typography, TextField, Button} from '@mui/material'
import AuthButton from "./AuthButton"
import logo from '../images/logo.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function RegisterForm({handleAction}) {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }

    return (
        <div>
            <div className="container">
                <Box
                    component="img"
                    sx={{
                    height: 180,
                    }}
                    alt="quiet time logo"
                    src={logo}
                />
                <h2>
                    Register 
                </h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        id="email" 
                        label="Enter Email" 
                        variant="outlined" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        id="password" 
                        label="Enter Password" 
                        variant="outlined" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <AuthButton title="Register" handleAction={onSubmit}/>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography>Already have an account?</Typography>
                        <Button onClick={() => navigate("/login")} sx={{color: 'dodgerblue'}}>Login</Button>
                    </Box> 
                </Box>
            </div>
        </div> 
    )
}


      