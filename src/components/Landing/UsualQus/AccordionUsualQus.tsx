"use client"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { FC, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
interface AccordionUsualQusProps {
    dataAccordion: {
        title: string,
        subDisc: string
    }[]

}

const AccordionUsualQus: FC<AccordionUsualQusProps> = ({ dataAccordion }) => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{
            margin: {
                xs: "0 1rem",
                md: "0"
            }
        }}>
            {
                dataAccordion.map(({ subDisc, title }, index) => {
                    return (
                        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                            <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"100%"} py={"0.75rem"} >
                                    <Box display={"flex"} alignItems={"center"} gap={1}>
                                        <CheckCircleOutlineIcon sx={{
                                            color: "var(--secoundry-color)"
                                        }} />
                                        <Typography component="span" sx={{
                                            fontWeight: 'bold', fontSize: '1rem'
                                        }}>{title}</Typography>
                                    </Box>
                                    <Box>
                                        {
                                            expanded === `panel${index}` ?
                                                <RemoveCircleOutlineIcon sx={{
                                                    fontSize: "1.5rem",
                                                    color: 'var(--primary-color)'
                                                }} />
                                                : <ControlPointIcon sx={{
                                                    fontSize: "1.5rem",
                                                    color: 'var(--primary-color)'
                                                }}
                                                />
                                        }
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                mr: '1rem',
                            }}>
                                <Typography sx={{
                                    fontSize: '0.90rem',
                                    pb: "1rem",
                                    color: "#444", lineHeight: 2
                                }}>
                                    {subDisc}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }



        </Box>

    )
}

export default AccordionUsualQus