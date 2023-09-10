import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'

const HomePage = () => {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movies))
    .catch(err=>console.log(err))
  },[])
  // console.log(movies)
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
        <img
          src='https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-360780/list/00360780list685365010685365f0012587080b493488e7efacf16501c4.jpg'
          alt='Master'
          width={'100%'}
          height={'100%'}

        />
        <Box padding={5} margin={'auto'}>
          <Typography variant='h4' textAlign={"center"} >
            Latest Release
          </Typography>
        </Box>

      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        flexWrap={"wrap"}
      
      >
        {movies && 
         movies.slice(0,4).map((movie,index) =>( 
        <MovieItem
         id={movie.id}
          tittle={movie.tittle}
           posterUrl={movie.posterUrl} 
           releaseDate={movie.releaseDate} 
           description={movie.description} 
           key={index} />))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{ margin: "auto", color: "#2b2d42" }} >
          View All Movies
        
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage