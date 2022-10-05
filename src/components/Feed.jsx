import React, {useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Sidebar from './Sidebar';


function Feed() {
  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row"
        }
      }}
    >
      <Box
        sx={{
          height: {
            sx: 'auto',
            md: '92vh'
          },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2}
        }}
        >
          <Sidebar /> 
          <Typography
            className="copyright"
            variant="body2"
            sx={{
              mt: 1.5,
              color: "#fff"
            }}
          >
            Copyright 2022 Mytube
          </Typography>
        </Box>
    </Stack>
  )
}

export default Feed