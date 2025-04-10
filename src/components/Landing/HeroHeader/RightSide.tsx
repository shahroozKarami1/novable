import { ICallToActionBtnH, IWhietTextTP } from '@/types/interfaces'
import { Box, Button, Typography } from '@mui/material'
import React, { FC } from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AndroidIcon from '@mui/icons-material/Android';
export const BtnCallToAction: FC<ICallToActionBtnH> = ({ icon, innerText, sx }) => {
    return (
        <Button sx={{
            borderRadius: "999px",
            width: "150px",
            padding: "0.75rem",
            ...sx
        }}>
            <Typography>{icon}</Typography>
            ‌ <Box sx={{ display: 'flex', alignItems: "flex-start", gap: 0.5, flexDirection: 'column', mr: '1rem' }}>
                <Typography sx={{
                    color: "var(--dark-color)",
                    fontSize: "0.60rem"
                }}>{innerText.top}</Typography>
                <Typography sx={{
                    color: "var(--dark-color)",
                    fontWeight: "bold"
                }}>{innerText.Bottom}</Typography>
            </Box>
        </Button>
    )
}
export const TextRightSide: FC<IWhietTextTP> = ({ innerText, sx }) => {
    return (
        <Typography sx={{
            color: `var(--white-color)`
            , ...sx
        }}>
            {
                innerText
            }
        </Typography>
    )
}
const RightSide = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "flex-start",
        }}>

            <TextRightSide innerText='خوش آمدید' sx={{ fontSize: "2.8rem" }} />
            <TextRightSide innerText='وب سایت نوابیل' sx={{
                fontSize: '4rem',
                fontWeight: "bold",
            }} />
            <TextRightSide sx={{
                mt: "1rem",
                fontSize: "1.1rem",
                lineHeight: '2'
            }} innerText='
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            ' />
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: '2rem'
            }}>
                <BtnCallToAction sx={{
                    backgroundColor: 'var(--white-color)'
                }} icon={<PhoneIphoneIcon />} innerText={{ Bottom: "اپل استور", top: "دریافت از" }} />
                <BtnCallToAction sx={{
                    border: '1px  solid var(--white-color)'
                }} icon={<AndroidIcon sx={{
                    color : 'var(--white-color)'
                }} />} innerText={{ Bottom: "گوگل پلی", top: "دریافت از" }} />
            </Box>
        </Box>
    )
}

export default RightSide
