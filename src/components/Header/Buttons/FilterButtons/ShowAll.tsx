import React, { useState } from "react";
import { Button } from '@mui/material'
import { buttonsStyle } from "../../../StyleConstants/HeaderStyleConstants/ButtonsStyle";

const ShowAll: React.FC<{clickedButton:boolean | null} & {setClickedButton(i:null): void}> = ({clickedButton, setClickedButton}) => {
    const styleObject = ({...buttonsStyle, textDecoration: clickedButton === null ? 'underline' : 'none'})
    return(
        <Button
            variant="contained"
            sx={styleObject}
            onClick={() => setClickedButton(null)}
        >
            ShowAll
        </Button>
    )
}

export default ShowAll;