import { TextareaAutosize, TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

type MemberShipInputsProps = {
    isTextarea: boolean
} & TextFieldProps

const MemberShipInputs: FC<MemberShipInputsProps> = ({ isTextarea, placeholder, name, onChange, type, value, onBlur }) => {
    return (
        <>
            {
                !isTextarea ? <TextField placeholder={placeholder} name={name} onChange={onChange} onBlur={onBlur} type={type} value={value} sx={{
                    width: '100%',
                }} /> :
                    <TextareaAutosize
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        minRows={3}

                        placeholder={placeholder}
                        style={{ width: "100%", height: "50px", padding: "1rem", border: "1px solid #ccc" }}
                    />

            }

        </>
    )
}

export default MemberShipInputs