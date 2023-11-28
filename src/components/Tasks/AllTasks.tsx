import React, { useContext } from "react";
import { Stack } from '@mui/material'
import Task from "./Tasks.tsx/Task";


const AllTasks: React.FC = ({tasksArray}) => {
    return(
        <Stack>
            {tasksArray.map((item:{title: string, description?: string, isCompleted: boolean}) => {
                return(
                    <div>{item.title}</div>
                )
            })}
        </Stack>
    )
}

export default AllTasks