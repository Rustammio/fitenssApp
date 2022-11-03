import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import Exercises from '../../components/Exerciceses/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises} />
    </Box>
  )
}

export default Home;
