import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FC } from "react";
import { Button, Stack, TextField } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage: FC = () => {
    return (
        <Container>
            <Typography variant="h1">Home Page</Typography>
            <Stack direction="column" spacing={2} className={styles.stack}>
                <TextField id="name" label="Nombre" variant="outlined" />
                <TextField id="last-name" label="Apellido" variant="outlined" />
                <TextField id="outlined-basic" label="DNI" variant="outlined" type="number" />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" />
                <Button variant="contained" type="submit">Enviar</Button>
            </Stack>
        </Container>
    );
};

export default HomePage;