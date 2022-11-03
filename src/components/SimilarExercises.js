import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScroll from '../components/HorizontalScroll'
import Loader from '../components/Loader'

const SimilarExercises = ({ targetMuscle, targetEquipment }) => {
  return (
    <Box sx={{
      mt: {
        lg: '100px', xs: '0'
      }
    }}>
      <Typography variant='h3' mb='5px'>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscle.length ? <HorizontalScroll data={targetMuscle} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb='5px'>Exercises that use the same equipment</Typography>
      <Stack>
        {
          targetEquipment.length ? <HorizontalScroll data={targetEquipment} /> : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises