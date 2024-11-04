import React from 'react'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from "sweetalert2";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    
    
    </Typography>
  );
}

const theme = createTheme();
const ContactForm = () => {
  const nav=useNavigate();
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Swal.fire({
      title: 'פנייתך התקבלה',
      showConfirmButton: true,
      confirmButtonText: "OK",
      icon: 'success'})
      nav("/")
  };
  
  const onSubmit = () => {
    setFormStatus('Submitting...')
  }
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box 
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'hotpink' }}>
          <CallIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          צור קשר
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="שם" 
            label="שם"
            name="שם"
            autoComplete="שם"
            autoFocus
          />
          <TextField 
            margin="normal"
            required
            fullWidth
            name="מייל"
            label="מייל"
            type="מייל"
            id="מייל"
            autoComplete="current-password"
            
          />
           <TextField 
            margin="normal"
            required
            fullWidth
            name="טקסט חופשי"
            label="טקסט חופשי"
            type="טקסט חופשי"
            id="טקסט חופשי"
            autoComplete="current-password"
            
          />
          <br></br>
         
          <button  style={{color:'hotpink', fontSize: '25px'}}>שלח</button>

          <br></br><br></br>
         
          <Grid container >
            <Grid item xs>
            </Grid>
            <Grid item>             
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  )
}
export default ContactForm