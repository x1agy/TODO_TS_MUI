import React from "react";
import { Button, Typography } from '@mui/material'
import { buttonsStyle } from "../../StyleConstants/HeaderStyleConstants/ButtonsStyle";

const AddTask: React.FC = () => {
    return(
        <Button
            variant="contained"
            sx={buttonsStyle}
        ><Typography>AddTask</Typography></Button>
    )
}

export default AddTask