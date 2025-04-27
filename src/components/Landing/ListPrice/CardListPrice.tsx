import { CardListPriceWrapper } from '@/elements/ElementsCustom'
import { CardListPriceProps } from '@/types/interfaces'
import { Box, Button, IconButton, List, ListItem, Typography } from '@mui/material'
import React, { FC } from 'react'

const CardListPrice: FC<CardListPriceProps> = ({ title, price, features, iconCard, subTitle }) => {
    return (
        <CardListPriceWrapper>
            <Box sx={{
                my : "1rem"
            }}>
                <IconButton sx={{
                    "& .MuiSvgIcon-root": {
                        fontSize: "4rem",
                        color: "var(--secoundry-color)",
                    }
                }}>
                    {iconCard}
                </IconButton>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem"
            }}>
                <Typography sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "var(--dark-color)",
                    textAlign: "center",
                }}>{title}</Typography>
                <Typography variant='body1'>{subTitle}</Typography>
            </Box>
            <List sx={{
                my : '1rem' ,  
            }}>
                {features.map((feature, index) => (
                    <ListItem sx={{
                        display : 'flex' ,  
                        alignItems : 'center' ,  
                        justifyContent : 'center' ,  
                    }} key={index}>
                        <Typography sx={{
                            fontSize : '0.90rem' ,  
                            textAlign : 'center' ,  
                            color : '#444' ,  
                      
                        }}>{feature}</Typography>
                    </ListItem>
                ))}
            </List>
            <Box>
                <Typography sx={{
                    fontSize : '1.8rem' ,  
                    fontWeight : 'bold' ,  
                    color : 'var(--secoundry-color)' ,  
                }} >{price} <span style={{
                    fontSize : '1.5rem' ,  
                    fontWeight : 'normal' ,  
                    color : 'var(--secoundry-color)' ,  
                }}>تومان</span></Typography>
            </Box>
            <Button sx={{
                border : '1px solid var(--dark-color)' ,  
                color : 'var(--dark-color)' ,  
                mt  : "2rem" ,  
                fontSize : '1rem' ,  
                "&:hover" : {
                    backgroundColor : 'var(--primary-color)' ,  
                    color : 'var(--white-color)' ,  
                }
            }}>
                اکنون بخرید !
            </Button>
        </CardListPriceWrapper>
    )
}

export default CardListPrice
