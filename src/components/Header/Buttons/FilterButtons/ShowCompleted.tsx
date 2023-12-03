import React, { useState } from "react";
import { Button } from '@mui/material'
import { buttonsStyle } from "../../../StyleConstants/HeaderStyleConstants/ButtonsStyle";

const ShowCompleted: React.FC<{clickedButton:boolean | null} & {setClickedButton(i:true): void}> = ({clickedButton, setClickedButton}) => {
    const styleObject = ({...buttonsStyle, textDecoration: clickedButton ? 'underline' : 'none'})
    return(
        <Button
            variant="contained"
            sx={styleObject}
            onClick={() => setClickedButton(true)}
        >   
            ShowCompleted
        </Button>
    )
}

export default ShowCompleted;