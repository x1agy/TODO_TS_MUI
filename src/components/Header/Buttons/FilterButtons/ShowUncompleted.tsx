import React, { useState } from "react";
import { Button } from '@mui/material'
import { buttonsStyle } from "../../../StyleConstants/HeaderStyleConstants/ButtonsStyle";

const ShowUncompleted: React.FC<{clickedButton:boolean | null} & {setClickedButton(i:false): void}> = ({clickedButton, setClickedButton}) => {
    const styleObject = {...buttonsStyle, textDecoration: clickedButton === false ? 'underline' : 'none'}
    return(
        <Button
            variant="contained"
            sx={styleObject}
            onClick={() => setClickedButton(false)}
        >
            ShowUncompleted
        </Button>
    )
}

export default ShowUncompleted;