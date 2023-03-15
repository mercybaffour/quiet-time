import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Typography, TextField, Button} from '@mui/material'
import AuthButton from "./AuthButton"
import logo from '../images/logo.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function LoginForm({handleAction}) {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
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
                    Login 
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
                    <AuthButton title="Login" handleAction={onLogin}/>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography>Don't have an account?</Typography>
                        <Button onClick={() => navigate("/register")} sx={{color: 'dodgerblue'}}>Sign up</Button>
                    </Box> 
                </Box>
            </div>
        </div> 
    )
}
