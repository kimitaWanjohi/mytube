import React, {useState, createContext, useEffect, useMemo, useRef} from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed } from './components'

import LoadingBar from 'react-top-loading-bar'

export const LoadingContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const loadingValue = useMemo(() => ({loading, setLoading}), [loading, setLoading]);

  useEffect(() => {
    if(loading){
      ref.current.continuousStart();
      setTimeout(() => ref.current.complete(), 2000);
    }else{
      ref.current.complete()
    }
  },[loading])

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      {
        <LoadingBar color='#f11946' ref={ref} />
      }
        <LoadingContext.Provider value={loadingValue}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </LoadingContext.Provider>
      </Box>
    </BrowserRouter>
  )
}

export default App