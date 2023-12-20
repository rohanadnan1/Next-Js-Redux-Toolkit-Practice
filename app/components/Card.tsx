import { Avatar, Box, Button, Typography } from "@mui/material"
import { Person } from "../page"
import { NotInterested } from "@mui/icons-material"
import {ThumbUp} from '@mui/icons-material'
import { useDispatch } from "react-redux"
import { addFav } from "../store/favSlice"
import { useSelector } from "react-redux"
import {removePerson} from '../store/favSlice'

export const Card = ({person}: any) => {


    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.favorites.data)
    console.log('data',data.people.people)

    const handleAdd = (person: Person) => {
        dispatch(addFav(person))
        dispatch(removePerson(person))
    }


    return(
        <Box sx={{
            border: '1px solid black',
            borderRadius: '10px',
            borderColor: 'gray',
            backgroundColor: 'wheat',
            width: '200px',
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <Avatar src={person.img}
            sx={{
                width: '100px',
                height: '100px',
            }}
            />
            <Typography variant="h5">{person.name}</Typography>
            <Box>
                <Button sx={{
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
                onClick={()=>handleAdd(person)}
                >
                    <ThumbUp sx={{
                        color: 'green'
                    }}/>
                </Button>
                <Button
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
                onClick={()=>dispatch(removePerson(person))}
                >
                    <NotInterested sx={{
                        color: 'red'
                    }}/>
                </Button>
            </Box>
        </Box>
    )
}