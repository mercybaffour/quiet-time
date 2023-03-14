import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { Link as MUILink} from '@mui/material'
import logo from '../images/logo.png'

export default function Navbar() {
    const linkSX = {
        "&:hover": {
            borderBottom: "2px solid #1f313e",
        },
        color: '#454545',
        fontWeight: 'bold'
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
            <MUILink component={RouterLink} to="/about" underline="none" sx={linkSX} style={{ marginLeft: 50, marginRight: 50 }}>
                About
            </MUILink>
            </Toolbar>
        </AppBar>
    ) 
}
