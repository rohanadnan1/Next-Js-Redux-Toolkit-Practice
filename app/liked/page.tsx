"use client";

import { Avatar, Box, Container, Grid, Typography, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FavCard from "../components/FavCard";

const Liked = () => {
  const likes = useSelector((state: any) => state.favorites.fav);
  

  if (likes.length > 0) {
    return (
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "50px",
            marginLeft: "20px",
          }}
        >
          {likes?.map((person: any) => (
            <Grid key={person.id} item xs={12} sm={6} md={3} sx={{}}>
              <FavCard person={person} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="error">
          No Favorites{" :( "}
        </Typography>
      </Box>
    </>
  );
};

export default Liked;
