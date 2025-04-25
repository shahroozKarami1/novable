"use client"
import { CusBtnLoginSubmit, WrapperDialog } from '@/elements/ElementsCustom'
import { Box, Dialog } from '@mui/material'
import React, { FC, useState } from 'react'
import MemberShipInputs from '../Membership/MemberShipInputs'
import { Form, Formik } from 'formik'
import { YupValidationLogin } from '@/validation/YupValidation'
import { CusErrorFormInput } from '../Membership/MemberShipFormValidation'
import SnackBarAlert from '@/components/SnackBarAlert/SnackBarAlert'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'
interface LoginDialogProps {
    open: boolean
    handleCloseDiollog: () => void
}

const LoginDialog: FC<LoginDialogProps> = ({ open, handleCloseDiollog }) => {
    let initialValues = {
        username: "",
        password: ""
    }
    let [isOpenSubmitSnackBar, setIsOpenSubmitSnackBar] = useState(false)
    let [isOpenErrorSnackBar, setIsOpenErrorSnackBar] = useState(false)
    return (
        <Box>
            <Dialog onClose={handleCloseDiollog} open={open}>
                <WrapperDialog >
                    ‌<Box
                        sx={{
                            width: "150px",
                            height: "100px",
                            backgroundColor: 'var(--primary-color)',
                            padding: '1rem',
                            borderRadius: "10px",
                            marginBottom: "2rem"
                        }}>
                        <img style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }} src="/image/landingPage/LogoNavBar.png" alt="logo" />
                    </Box>
                    <Formik validationSchema={YupValidationLogin} initialValues={initialValues} onSubmit={(values, actions) => {
                        setTimeout(() => {
                            actions.setSubmitting(false)
                            actions.resetForm();
                            if (values.username === "admin" && values.password === "admin") {
                                if (open) {
                                    handleCloseDiollog()
                                }
                                setIsOpenSubmitSnackBar(true)
                                // Cookies.set("token", "fhefiwefgigiwfgiwfiewug")
                                // redirect("/admin")
                            } else {
                                setIsOpenErrorSnackBar(true)
                            }

                        }, 2000);
                    }}>

                        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched }) => (
                            <Form onSubmit={handleSubmit} style={{
                                width: "100%",
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}>
                                <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                                    <MemberShipInputs type='text' name='username' onChange={handleChange} onBlur={handleBlur} value={values.username} isTextarea={false} placeholder='نام کاربری : ' />
                                    {
                                        errors.username && touched.username && (
                                            <CusErrorFormInput>{errors.username}</CusErrorFormInput>
                                        )
                                    }
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                                    <MemberShipInputs type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} isTextarea={false} placeholder='کلمه عبور : ' />
                                    {
                                        errors.password && touched.password && (
                                            <CusErrorFormInput>{errors.password}</CusErrorFormInput>
                                        )
                                    }
                                </Box>
                                <CusBtnLoginSubmit type='submit' disabled={isSubmitting} sx={{
                                    mt: '2rem',
                                    mb: '1rem',
                                }}>ورود</CusBtnLoginSubmit>
                            </Form>
                        )}
                    </Formik>
                </WrapperDialog>
            </Dialog>
            <SnackBarAlert open={isOpenSubmitSnackBar} message="ورود با موفقیت انجام شد" onClose={() => setIsOpenSubmitSnackBar(false)} />
            <SnackBarAlert open={isOpenErrorSnackBar} message="رمز عبور و نام کاربری اشتباه است" onClose={() => setIsOpenErrorSnackBar(false)} />
        </Box>

    )
}

export default LoginDialog
