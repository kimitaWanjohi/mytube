import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';


function Videos({videos, direction}) {
  return (
    <Stack
      direction={ direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {
        videos && videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos