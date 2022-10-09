import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import Videos from './Videos';
import ChannelCard from './ChannelCard';
import {LoadingContext} from '../App';
import {fetchFromAPI} from '../utils/fetchFromApi';



function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const {setLoading} = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0]);
        setLoading(false);
      });
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items);
        setLoading(false)
      });
  }, [id, setLoading])

  return (
    <Box
      minHeight="95vh"
    >
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(232,7,157,0.8016129032258065) 25%, rgba(201,35,170,1) 43%, rgba(168,64,184,1) 74%, rgba(0,212,255,1) 91%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} mt="-100px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail