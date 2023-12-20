import { Box, Button,  InputBase, Stack, Badge, Typography } from "@mui/material";
import PersonSearch from "@mui/icons-material/PersonSearch";
import {Favorite} from "@mui/icons-material";
import { useSelector } from "react-redux";
import Link from "next/link";
import Input from "./Input";

export const Navbar = () => {

  const likes = useSelector((state: any) => state.favorites.fav)
  console.log(likes)

  return (
    <Box sx={{
        marginTop: "1rem",
    }}>
      <Stack direction="row" spacing={2} alignItems={'center'}>
        <Typography variant="h5" sx={{
            fontWeight: "bold",
            cursor: "pointer"
        }}>
            Dating App
        </Typography>
        <Input/>
          <Link href='/liked'>
          <Badge color="secondary" badgeContent={likes.length}>
            <Favorite fontSize="large"
            sx={{
                color: "red",
                "&:hover": {
                    color: "darkred"
                },
                cursor: "pointer"
            }}
            />
          </Badge>
          </Link>
      </Stack>
    </Box>
  );
};
