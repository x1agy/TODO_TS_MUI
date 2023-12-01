import React from "react";
import { Stack } from '@mui/material'
import Task from "./Tasks.tsx/Task";
import { FilteredTasksType } from "../../App";

const AllTasks: React.FC<{ tasksArray: FilteredTasksType[]} & {updateTask: (i: FilteredTasksType) => void} & {deleteTask: (id: number) => void}> = ({ tasksArray, updateTask, deleteTask }) => {
    
    return(
        <Stack
            sx={{
                marginTop:"130px"
            }}
        >
            {tasksArray && tasksArray.map(item => {
                return(
                    <Task 
                        title={item.title}
                        description={item.description}
                        isCompleted={item.isCompleted}
                        id={item.id}
                        setTask = {(i:FilteredTasksType) => updateTask(i)}
                        deleteTask = {(id: number) => deleteTask(id)}
                    />
                )
            })}
        </Stack>
    )
}

export default AllTasks