import { CusCounterDetails } from '@/elements/ElementsCustom'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import BoxDetail from './BoxDetail'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
const CounterDetails = () => {
    return (
        <CusCounterDetails>
            <Container>
                <Grid container spacing={{
                    md: 1,
                    xs: 4
                }}>
                    <Grid size={{ md: 3, xs: 12 }}>
                        <BoxDetail icon={<EmojiEventsOutlinedIcon />} NumberDetails={500} subDetail='دریافت جایزه' />
                    </Grid>
                    <Grid size={{ md: 3, xs: 12 }}>
                        <BoxDetail icon={<EmojiEventsOutlinedIcon />} NumberDetails={15} subDetail='دریافت جایزه' />
                    </Grid>
                    <Grid size={{ md: 3, xs: 12 }}>
                        <BoxDetail icon={<EmojiEventsOutlinedIcon />} NumberDetails={500} subDetail='دریافت جایزه' />
                    </Grid>
                    <Grid size={{ md: 3, xs: 12 }}>
                        <BoxDetail icon={<EmojiEventsOutlinedIcon />} NumberDetails={200} subDetail='دریافت جایزه' />
                    </Grid>
                </Grid>
            </Container>
        </CusCounterDetails>
    )
}

export default CounterDetails
