import { LatestBlogCardDate } from '@/elements/ElementsCustom'
import { LatestBlogCardProps } from '@/types/interfaces'
import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'



const LatestBlogCard: FC<LatestBlogCardProps> = ({ author, countComments, cover, date, disc, title }) => {
    return (
        <Box display={"flex"} flexDirection={"column"} sx={{
            cursor: 'pointer'  ,  
            "&:hover" : {
                transform : "scale(0.9)" ,
                transition : "all 0.5s  ease" ,  
}
        }}>
            ‌<Box sx={{ width: "100%", height: "100%" ,  


             }}>
                <img src={cover} alt="" style={{
                    objectFit: 'cover',
                    objectPosition: "center",
                    height: '100%',
                    width: '100%'
                }} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2} sx={{
                position: "relative",
                backgroundColor: 'var(--white-color)',
                px: "1rem",
                boxShadow: "var(--primary-shadow)",

            }}>
                <LatestBlogCardDate ><Typography sx={{ fontSize: '0.80rem' }}>{date}</Typography></LatestBlogCardDate>
                <Typography sx={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    lineHeight: 2,
                    pt: "2.5rem"
                }}>{title}</Typography>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Typography sx={{ fontSize: "0.90rem" }}>توسط {author}  </Typography>|
                    <Typography sx={{ fontSize: "0.90rem" }}>دیدگاه {countComments} </Typography>
                </Box>
                <Typography sx={{
                    lineHeight: 2,
                    width: '90%',
                    fontSize: "0.90rem",
                    color: "#444"
                }}>{disc}</Typography>

                <Box sx={{
                    pb: "1rem"
                }}>
                    <Button sx={{ color: "var(--secoundry-color)", fontWeight: "bold" }}>ادامه  مطلب</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default LatestBlogCard