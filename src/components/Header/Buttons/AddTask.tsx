import React from "react";
import { Button, Typography } from '@mui/material'
import { buttonsStyle } from "../../StyleConstants/HeaderStyleConstants/ButtonsStyle";
import { FilteredTasksType } from "../../../App";

const AddTask: React.FC<{addTask(i:FilteredTasksType): void}> = ({addTask}) => {
    
    return(
        <Button
            variant="contained"
            sx={buttonsStyle}
        ><Typography>AddTask</Typography></Button>
    )
}

export default AddTask