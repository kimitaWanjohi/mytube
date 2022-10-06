import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CheckCircle} from '@mui/icons-material';

import { 
    demoThumbnailUrl,
    demoVideoUrl, 
    demoChannelUrl,
    demoVideoTitle,
    demoChannelTitle
    } from '../utils/constants';


function VideoCard({ video: {id: {videoId}, snippet}}) {
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: 358, height: 180}}
            />
        </Link>
    </Card>
  )
}

export default VideoCard