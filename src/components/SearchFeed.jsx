import React, {useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router-dom';

import Videos from './Videos';
import {LoadingContext} from '../App';
import {fetchFromAPI} from '../utils/fetchFromApi';

export default function SearchFeed() {
  const [videos, setVideos] = useState();
  const {searchTerm} = useParams();
  const {setLoading} = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
  }, [searchTerm, setLoading])

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}
    >
      <Typography
        variant="h4"
        component="div"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "white",
          marginLeft: '1px'
        }}
      >
        Search Results for: 
        <span
          style={{
            color: "#F31503"
          }}
        >
          {' '} {searchTerm} {' '}
        </span>Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}


