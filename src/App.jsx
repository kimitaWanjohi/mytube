import React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App