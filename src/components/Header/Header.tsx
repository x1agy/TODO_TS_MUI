import React from "react";
import Box from "@mui/material/Box"
import { AppBar, Typography, Stack } from "@mui/material";
import AddTask from "./Buttons/AddTask";
import ShowAll from "./Buttons/FilterButtons/ShowAll";
import ShowCompleted from "./Buttons/FilterButtons/ShowCompleted";
import ShowUncompleted from "./Buttons/FilterButtons/ShowUncompleted";
import SearchDefaultInput from "./SearchTask/SearchTaskInput";

const Header: React.FC = () => {
    return(
        <Box>
            <AppBar
                sx={{
                    display:"flex",
                    flexDirection:"row"
                }}
            >
                <Typography
                    sx={{
                        m:"20px",
                        p:2,
                        border:"1px solid white"
                    }}
                >
                    To-Do App
                </Typography>

                <AddTask />

                <Stack
                    direction={"row"}
                    
                >
                    <ShowAll />
                    <ShowCompleted />
                    <ShowUncompleted />
                </Stack>
                
                <SearchDefaultInput />

            </AppBar>
        </Box>
    )
}

export default Header