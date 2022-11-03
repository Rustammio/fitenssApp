import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos)
  if (!exerciseVideos.length) return 'Loading... '
  return (
    <Box
      sx={{
        mt: {
          lg: '200px',
          xs: '20px'
        },
        p: '20px'
      }}
    >
      <Typography variant="h4" mb='33px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span>  exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{ flexDirection: { lg: 'row', sx: 'column' }, gap: { lg: '110px', sx: '0' } }}>
        {exerciseVideos?.slice(0, 6)?.map((video, i) => (
          <a
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            className='exercise-video'
            key={i} target='_blank'
            rel="noreferrer"
          >
            <img src={video.video.thumbnails[0].url} alt={video.video.title} />
            <Box>
              <Typography variant='h5' color='#000'>{video.video.title}</Typography>
              <Typography variant='h6' color='#000'>{video.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos