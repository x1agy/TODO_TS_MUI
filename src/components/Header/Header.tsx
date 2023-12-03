import React from "react";
import Box from "@mui/material/Box"
import { buttonsStyle } from "../StyleConstants/HeaderStyleConstants/ButtonsStyle";
import { AppBar, Typography, Stack, Button } from "@mui/material";
import ShowAll from "./Buttons/FilterButtons/ShowAll";
import ShowCompleted from "./Buttons/FilterButtons/ShowCompleted";
import ShowUncompleted from "./Buttons/FilterButtons/ShowUncompleted";
import SearchDefaultInput from "./SearchTask/SearchTaskInput";
import { FilteredTasksType } from "../../App";
import AddTaskModal from "./Buttons/AddTask/AddTaskModal";

const Header: React.FC<{clickedButton: boolean | null} & {addTask(i:FilteredTasksType): void} & {setFilterWord(i:string): void} & {setFilterButton(i:boolean | null): void} > = ({clickedButton, addTask, setFilterButton, setFilterWord}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

                <Button
                    variant="contained"
                    sx={buttonsStyle}
                    onClick={handleOpen}
                ><Typography>AddTask</Typography></Button>

                <Stack
                    direction={"row"}
                    
                >
                    <ShowAll 
                        setClickedButton={(i:null) => setFilterButton(i)}
                        clickedButton={clickedButton}
                    />
                    <ShowCompleted 
                        setClickedButton={(i:true) => setFilterButton(i)}
                        clickedButton={clickedButton}
                    />
                    <ShowUncompleted 
                        setClickedButton={(i:false) => setFilterButton(i)}
                        clickedButton={clickedButton}
                    />
                </Stack>
                
                <SearchDefaultInput 
                    setFilterWord={(word:string) => setFilterWord(word)}
                />

            </AppBar>

            <AddTaskModal 
                handleClose={handleClose}
                handleOpen={handleOpen}
                open={open}
                addTask={(task:FilteredTasksType) => addTask(task)}
            />
        </Box>
    )
}

export default Header