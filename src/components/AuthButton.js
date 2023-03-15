import React from 'react'
import Button from '@mui/material/Button'

export default function AuthButton({logout, title, handleAction}) {
  return (
    <Button 
      variant="contained"
      sx={{mr: 2, my: 4, width: '150px', backgroundColor: 'dodgerblue'}}
      onClick={handleAction}
    >
        {title}
    </Button>
  )
}
