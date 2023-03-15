import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { Link as MUILink} from '@mui/material'
import logo from '../images/logo.png'
import { signOut } from "firebase/auth";
import {auth} from '../firebase-config';

export default function Navbar() {
    const linkSX = {
        "&:hover": {
            borderBottom: "2px solid #1f313e",
        },
        color: '#454545',
        fontWeight: 'bold'
    }

    const navigate = useNavigate()

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <AppBar position="static" elevation={0} style={{ background: 'white' }}>
            <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                <Box
                    component="img"
                    sx={{
                    height: 180,
                    }}
                    alt="quiet time logo"
                    src={logo}
                />
            </Typography>
            <MUILink component={RouterLink} to="/" underline="none" sx={linkSX}>
                Home
            </MUILink>
            <MUILink component={RouterLink} to="/journal" underline="none" sx={linkSX} style={{ marginLeft: 50, marginRight: 50 }}>
                Your Journal
            </MUILink>
            <Button 
                sx={{mr: 2, my: 4, width: '100px', fontWeight: 'bold', textTransform: 'capitalize', color: '#454545', backgroundColor: '#bed5ea'}}
                onClick={handleLogout}
            >
                Logout
            </Button>
            </Toolbar>
        </AppBar>
    ) 
}
