'use client'

import {Box, Button, Container, Stack, styled, Grid, Typography} from '@mui/material'
import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import {data} from './data'
import { Card } from './components/Card'
import { useSelector } from 'react-redux'


export interface Person {
    id: string;
    name: string;
    age: number;
    gender: string;
    city: string;
    interests: string[];
    img: string;
}


export default function Home() {

  const data = useSelector((state: any) => state.favorites.data)
  const search = useSelector((state: any) => state.search.search)
  console.log(data.people.people)

  return(
    <Container>
      <Navbar />
      {
        data.people.people.length > 0 ?
        <Grid container spacing={2} sx={{
          marginTop: '50px',
          marginLeft: '20px'
        }}>
          {
          
          data.people.people.filter((person: Person)=>{
            if(person.name.toLowerCase().includes(search.toLowerCase()) ||
            person.city.toLowerCase().includes(search.toLowerCase())
            ){
              return person
            }
          })
          .map((person: Person) => (
            <Grid key={person.id} item xs={12} sm={6} md={3} 
            sx={{
            }}
            >
              <Card person={person} />
            </Grid>
          ))}
        </Grid> :
        <Box sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant="h3" color="error">No More People To Show </Typography>
        </Box>
      }
    </Container>
  )
 }


