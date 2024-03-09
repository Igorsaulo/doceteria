import { Button, Grid, TextField, Typography } from "@mui/material";

function RegisterForm() {
    return (
        <Grid
            container
            bgcolor={"gray"}
            marginTop={"20vh"}
            height={"60vh"}
            width={"50vw"}
            borderRadius={"20px"}
            padding={"2rem"}
            spacing={2}
        >
            <Grid
                item
                xs={12}
            >
                <Typography
                    fontSize={"32px"}
                    variant={"h1"}>
                    Cadastrar Usuário
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                container
               display={"flex"}
               justifyContent={"space-between"}
            >
                <TextField
                    sx={{
                        width: "32%"
                    }}
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    sx={{
                        width: "32%"
                    }}
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                />
                                <TextField
                    sx={{
                        width:"32%"
                    }}
                    label="E-mail"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Senha"
                    variant="outlined"
                    margin="normal"
                    type="password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        borderRadius: "20px",
                        backgroundColor: "#2D9CDB",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px"
                    }}
                >
                    Entrar
                </Button>
            </Grid>
        </Grid>
    )
}

export { RegisterForm }