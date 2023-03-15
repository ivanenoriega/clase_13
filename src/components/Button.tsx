import MuiButton from '@mui/material/Button'
import { FC } from "react";

interface Props {
    onClick: () => void;
}

const Button: FC<Props> = ({ onClick }) => {
    return (
        <MuiButton variant="contained" onClick={onClick}>Hola Mundo</MuiButton>
    )
}


export default Button