import React, { useContext } from "react";
import { Stack } from '@mui/material'
import { TasksContext } from "../Context/TasksContext";
import Task from "./Tasks.tsx/Task";

const AllTasks: React.FC = () => {
    const tasksArray = useContext(TasksContext);
    return(
        <Stack>
            {tasksArray.map(item => {
                return(
                    <div></div>
                )
            })}
        </Stack>
    )
}

export default AllTasks