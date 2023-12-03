import React from 'react';
import { Modal, Button, Box, TextField} from '@mui/material';
import { styleCloseIconInModal, styleDescriptionTextFieldModal, styleForModal, styleSaveButtonModal, styleTitleTextFieldModal } from '../../../StyleConstants/ModalsStyle';
import CloseIcon from '@mui/icons-material/Close';

const AddTaskModal: React.FC<any> = ({handleClose, open, addTask}) => {
    const [titleValue, setTitleValue] = React.useState<string | number>('')
    const [descriptionValue, setDescriptionValue] = React.useState<string | number | undefined>(undefined)
    
    function addNewTask(){
        if(titleValue){
            if(descriptionValue){
                addTask({
                    title: titleValue,
                    description: descriptionValue,
                    isCompleted: false,
                    id: Date.now()
                })
            }else{
                addTask({
                    title: titleValue,
                    isCompleted: false,
                    id: Date.now()
                })
            }
            setTitleValue('')
            setDescriptionValue(undefined)
            handleClose();
        }
    }

    return(
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
                        variant='standard'
                        label='title'
                        sx={styleTitleTextFieldModal}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                    <br />
                    <TextField 
                        variant='standard'
                        label='decription(optional)'
                        multiline
                        sx={styleDescriptionTextFieldModal}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        color='error'
                        onClick={handleClose}
                    >
                        close
                    </Button>
                    <Button
                        variant='contained'
                        sx={styleSaveButtonModal}
                        onClick={addNewTask}
                    >save</Button>
                    
                </Box>
            </Modal>
        </>
    )
}

export default AddTaskModal;