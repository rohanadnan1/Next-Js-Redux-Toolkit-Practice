import { Avatar, Box, Button, Typography, Modal } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../store/favSlice";
import { addToData } from "../store/favSlice";

const FavCard = ({ person }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showLove, setShowLove] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const rn = Math.floor(Math.random() * 100);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 400,
    width: 400,
    bgcolor: "#FAF9F6",
    border: "1px solid #FAF9F6",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: 24,
    p: 4,
  };

  const showLoveFunc = (data: any) => {
    setShowLove(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          borderColor: "gray",
          backgroundColor: "wheat",
          width: "200px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Avatar
          src={person.img}
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <Typography variant="h5">{person.name}</Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          If you remove {person.gender == "male" ? "him" : "her"} from here
          {person.gender == "male" ? " he" : " she"} will be added back to the
          main page.
        </Typography>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#FF7F7F",
            },
            backgroundColor: "red",
            color: "white",
          }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFav(person));
            dispatch(addToData(person));
          }}
        >
          Remove
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {person.gender == "male" ? "Like him ?" : "Like her ?"} Here is more
            info about {person.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            {person.name} is {person.age} years old and lives in {person.city}.
            <br />
            {person.name} is looking for a person with interest in{" "}
            {person.interests.join(", ")}.
          </Typography>
          {showLove && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <Typography>
                Wanna see your love percentage with {person.name} ?
              </Typography>
              <Button
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkred",
                  },
                  marginTop: "1rem",
                }}
                onClick={() => showLoveFunc(person)}
              >
                Check
              </Button>
            </Box>
          )}
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <Typography>Calculating...</Typography>
            </Box>
          ) : (
           !showLove && <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <Typography>
                Your love percentage with {person.name} is {rn}%
              </Typography>
              {rn > 50 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  You two looks like a good match
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Maybe you should try someone else...
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Modal>
      <Box />
    </>
  );
};

export default FavCard;
