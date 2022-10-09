import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'

function Navbar() {
  return (
    <Stack 
      direction="row"
      alignItems="center" 
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
        <img src="https://www.youtube.com/s/desktop/6588612c/img/favicon_48x48.png" alt="logo" height={40} />
        {" "}
        <Typography variant="h4" color="#fff"
          sx={{
            marginLeft: "2px",
            display: {xs: 'none', md: 'block'}
          }}
        >
          My
          <span
            style={{
              color: "#F31503"
            }}
          >
          Tube
          </span>
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar