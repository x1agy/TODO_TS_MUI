import React from 'react';
import { Paper, Typography, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';

const Task: React.FC<{title: string, description: string, isCompleted: boolean}> = ({ title, description, isCompleted }) => {
    return(
        <Paper>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {description || "Task didnt have description"}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Checkbox 
                checked={isCompleted}
            />
        </Paper>
    )
}

export default Task