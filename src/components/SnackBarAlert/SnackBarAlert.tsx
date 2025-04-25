import { Snackbar } from '@mui/material'
import React, { FC } from 'react'

interface SnackBarAlertProps {
    message: string,
    open: boolean ,  
    onClose: () => void
}

const SnackBarAlert: FC<SnackBarAlertProps> = ({ message, open, onClose }) => {


    return (
        <Snackbar
            sx={{
                "& .MuiSnackbarContent-root": {
                    backgroundColor: "var(--primary-color)",
                    color: "var(--white-color)",
                    fontSize: "1rem",
                    fontWeight: "bold",
                }
            }}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            message={message}
            onClose={onClose}
        />
    )
}

export default SnackBarAlert
