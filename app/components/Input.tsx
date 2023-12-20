import { Box, Button, InputBase } from "@mui/material";
import PersonSearch from "@mui/icons-material/PersonSearch";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/searchSlice";

const Input = () => {

    const dispatch = useDispatch()

    return(
        <Box flexGrow={2} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
          <InputBase placeholder="Search" sx={{
            width: '20rem'
          }} 
          onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            <PersonSearch />
          </Button>
        </Box>
    )
}

export default Input;