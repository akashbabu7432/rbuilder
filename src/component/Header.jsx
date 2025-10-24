import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';


function Header() {
    const projectinfo="we build your dream resume.this is a simulation this is not a real world .we provide an ats friendly resume"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'yellowgreen'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'35px'} src="https://png.pngtree.com/png-vector/20250427/ourmid/pngtree-cartoon-monkey-holding-a-book-and-enjoying-reading-time-png-image_16130763.png" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-decoration-none text-light '>R-builder</Link>
          </Typography>
          <Tooltip title={projectinfo} arrow>
            <Button color="inherit">ABOUT US</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header