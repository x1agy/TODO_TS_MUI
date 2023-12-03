import React from 'react';
import { Paper, Typography, Checkbox, Accordion, Modal, Box, AccordionSummary, AccordionDetails, Button, TextField} from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import { FilteredTasksType } from '../../../App';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { styleForModal, styleCloseIconInModal, styleDescriptionTextFieldModal, styleSaveButtonModal, styleTitleTextFieldModal } from '../../StyleConstants/ModalsStyle';


const Task: React.FC<FilteredTasksType & {setTask: (i: FilteredTasksType) => void} & {deleteTask: (id: number) => void}> = ({ title, description, isCompleted, id, setTask, deleteTask }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [titleValue, setTitleValue] = React.useState<string>(title)
    const [descriptionValue, setDescriptionValue] = React.useState<string>(description || "task didnt have description")


    function saveChanges(){
        if(titleValue && (titleValue + "").length < 100){
            handleClose()
            setTask({
                title: titleValue,
                description: descriptionValue,
                isCompleted: isCompleted,
                id: id
            })
        }
    }

    return(
        <Paper
            sx={{
                margin:"20px"
            }}
        >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    
                    <Typography
                        sx={{
                            textDecoration: isCompleted ? 'line-through' : 'none'
                        }}
                    >
                        <Checkbox 
                            checked={isCompleted}
                            onClick={() => setTask({title: title, description: description, isCompleted: isCompleted ? false : true, id: id})}
                        />
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button
                        variant='contained'
                        sx={{
                            mb:"30px"
                        }}
                        onClick={handleOpen}
                    >
                        Edit
                        <EditIcon 
                            sx={{
                                height:"17px"
                            }}
                        />
                    </Button>
                    <Button
                        variant='contained'
                        color='error'
                        sx={{
                            mb:"30px",
                            ml:"10px"
                        }}
                        onClick={() => deleteTask(id)}
                    >
                        delete
                        <DeleteIcon 
                            sx={{
                                height:"17px"
                            }}
                        />
                    </Button>
                    <Typography
                        sx={{
                            textDecoration: isCompleted ? 'line-through' : 'none',
                            wordBreak:"break-word"
                        }}
                    >
                        {description || "Task didnt have description"}
                    </Typography>
                </AccordionDetails> 
            </Accordion>
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    
                >
                    <Box sx={styleForModal}>
                    <CloseIcon 
                        sx={styleCloseIconInModal}
                        onClick={handleClose}
                    />
                    
                    <TextField 
                        value={titleValue}
                        variant='standard'
                        onChange={(e) => setTitleValue(e.target.value + '')}
                        sx={styleTitleTextFieldModal}
                    />
                    <br />
                    <TextField 
                        value={descriptionValue}
                        variant='standard'
                        onChange={(e) => setDescriptionValue(e.target.value + '')}
                        sx={styleDescriptionTextFieldModal}
                        multiline
                    />
                    <Button
                        variant='contained'
                        color='error'
                        onClick={handleClose}
                    >close</Button>
                    <Button
                        sx={styleSaveButtonModal}
                        variant='contained'
                        onClick={saveChanges}
                    >save</Button>
                    </Box>
                    
                </Modal>
            </>
        </Paper>
    )
}

export default Task