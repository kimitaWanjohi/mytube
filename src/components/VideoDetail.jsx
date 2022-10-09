import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Videos from './Videos';
import { LoadingContext } from '../App';
import {fetchFromAPI} from '../utils/fetchFromApi';


function VideoDetail() {
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState([]);
  const {setLoading} = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => {
        setVideoDetail(data.items[0]);
        setLoading(false);
      });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => {
        setVideos(data.items);
        setLoading(false);
      });
  }, [id, setLoading]);

  if(!videoDetail?.snippet) return 'loading...';

  const {snippet: {title, channelId, channelTitle},
        statistics: { viewCount, likeCount}} = videoDetail;

  return (
    <Box
      minHeight="95vh"
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{
            width: "100%",
            position: 'sticky',
            top: '86px'
          }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff" variant="h5" fontWeight="bold" p={2}
            >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{
              color: "#fff"
            }}
            py={1}
            px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle}

                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{md: 1, xs: 5}}
          justifyContent="center"
        >
          <Videos videos={videos} direction={{ sm: "row", md: "column"}} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail 