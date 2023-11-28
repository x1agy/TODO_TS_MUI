import React from 'react';
import { Box, TextField } from '@mui/material';
import { Search } from "@mui/icons-material";

const SearchDefaultInput: React.FC = () => {
    return(
        <Box
            sx={{
                position:"relative",
                ml:"auto"
            }}
        >
            <TextField 
                variant="standard"
                sx={{
                    m:"20px",
                    width:"280px"
                }}
            />
            <Search 
                sx={{
                    position:"absolute",
                    color:"black",
                    top:"20px",
                    right:"20px"
                }}
            />
        </Box>
    )
}

export default SearchDefaultInput;