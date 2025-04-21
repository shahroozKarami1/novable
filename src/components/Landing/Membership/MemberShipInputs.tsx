import { TextareaAutosize, TextField } from '@mui/material'
import { FC } from 'react'

interface MemberShipInputsProps {
    placeholder: string,
    isTextarea: boolean
}

const MemberShipInputs: FC<MemberShipInputsProps> = ({ isTextarea, placeholder }) => {
    return (
        <>
            {
                !isTextarea ? <TextField placeholder={placeholder} sx={{
                    width : '100%' ,  
                }}/> :
                    <TextareaAutosize
                        minRows={3}
                        placeholder={placeholder}
                        style={{ width: "100%" , height : "50px"  ,  padding : "1rem" ,  border: "1px solid #ccc"}}
                    />

            }

        </>
    )
}

export default MemberShipInputs