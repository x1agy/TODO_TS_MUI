import React, { useState } from "react";
import { Button } from '@mui/material'
import { buttonsStyle } from "../../../StyleConstants/HeaderStyleConstants/ButtonsStyle";

const ShowAll: React.FC = () => {
    const [styleObject, setStyleObject] = useState<{}>({...buttonsStyle})
    return(
        <Button
            variant="contained"
            sx={styleObject}
        >
            ShowAll
        </Button>
    )
}

export default ShowAll;