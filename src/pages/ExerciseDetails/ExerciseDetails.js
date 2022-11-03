import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { options, fetchData, youTubeOptions } from '../../utils/fetchData'
import Details from '../../components/Details';
import ExerciseVideos from '../../components/ExerciseVideos';
import SimilarExercises from '../../components/SimilarExercises';



const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState({});
  const [targetEquipmentExercises, setTargetEquipmentExercises] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youTubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscle = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, options)
      setTargetMuscleExercises(targetMuscle)

      const targetEquipment = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`, options)
      setTargetEquipmentExercises(targetEquipment)

    }
    fetchExercisesData();
  }, [id])
  console.log(exerciseDetail)
  console.log(exerciseVideos)
  return (
    <Box>
      <Details exerciseDetails={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscleExercises} targetEquipment={targetEquipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails;