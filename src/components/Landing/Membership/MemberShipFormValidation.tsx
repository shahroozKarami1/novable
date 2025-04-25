"use client"
import React, { FC, useState } from 'react'
import { Formik, Form } from 'formik';
import { YupValidation } from '@/validation/YupValidation';
import MemberShipInputs from './MemberShipInputs';
import { Button, Grid, Snackbar, Typography } from '@mui/material';
import { postData } from '@/services/apiServices';


export const CusErrorFormInput: FC<{ children: string }> = ({ children }) => {

    return (
        <Typography sx={{ color: 'var(--primary-color)', py: '0.5rem', fontSize: "0.90rem" }}>
            {children}
        </Typography>
    )
}

const MemberShipFormValidation = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    let initialValues = {
        name: "",
        email: "",
        topic: "",
        comment: ""
    }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={YupValidation}
                onSubmit={async (values, { resetForm }) => {
                    const response = await postData("/membershipComments", values)
                    console.log(response)
                    if (response.status == 201) {
                        setOpen(true);
                        resetForm();
                    }
                }} >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors }) => (

                    <Form onSubmit={handleSubmit} >
                        <Grid container spacing={4}>
                            <Grid size={{ md: 6, xs: 12 }}>
                                <MemberShipInputs onBlur={handleBlur} value={values.name} isTextarea={false} type='text' placeholder='نام شما' name='name' onChange={handleChange} />
                                {errors.name && <CusErrorFormInput >{errors.name}</CusErrorFormInput>}
                            </Grid>
                            <Grid size={{ md: 6, xs: 12 }}>
                                <MemberShipInputs onBlur={handleBlur} value={values.email} isTextarea={false} type='email' placeholder='ایمیل شما' name='email' onChange={handleChange} />
                                {errors.email && <CusErrorFormInput >{errors.email}</CusErrorFormInput>}
                            </Grid>
                            <Grid size={{ md: 12, xs: 12 }}>
                                <MemberShipInputs onBlur={handleBlur} value={values.topic} isTextarea={false} type='text' placeholder='موضوع شما' name='topic' onChange={handleChange} />
                                {errors.topic && <CusErrorFormInput >{errors.topic}</CusErrorFormInput>}
                            </Grid>
                            <Grid size={{ md: 12, xs: 12 }}>
                                <MemberShipInputs onBlur={handleBlur} value={values.comment} isTextarea={true} type='text' placeholder='دیدگاه شما' name='comment' onChange={handleChange} />
                                {errors.comment && <CusErrorFormInput >{errors.comment}</CusErrorFormInput>}
                            </Grid>
                            <Grid size={{ md: 12 }}>
                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    sx={{ backgroundColor: 'var(--primary-color)', color: "var(--white-color)", padding: "1rem" }}>ارسال
                                </Button>
                            </Grid>
                        </Grid>

                    </Form>
                )}
            </Formik>

            <Snackbar

                autoHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                onClose={handleClose}
                message="اطلاعات شما با موفقیت ثبت شد"
            />
        </>

    )
}

export default MemberShipFormValidation
