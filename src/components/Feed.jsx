import React, {useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Sidebar from './Sidebar';
import Videos from './Videos';
import {LoadingContext} from '../App';

import {fetchFromAPI} from '../utils/fetchFromApi';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState();
  const {setLoading} = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
  }, [selectedCategory, setLoading])

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
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          /> 
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
            {selectedCategory}
            <span
              style={{
                color: "#F31503"
              }}
            >
              Videos
            </span>
          </Typography>
          <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed
