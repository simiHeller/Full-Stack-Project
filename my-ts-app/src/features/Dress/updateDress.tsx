import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDress } from './dressSlice';
import Dress from '../../models/Dress';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
   
    </Typography>
  );
}

const theme = createTheme();

export default function UpdateDress() {

  const navigate=useNavigate();

  const dresses=useSelector((state:RootState )=> state.DressReducer.dress);
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDress());
  }, []);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    
 const data = new FormData(event.currentTarget);
 const dress:Dress|any=dresses.find((d:Dress)=>d.title==data.get('כותרת השמלה'))


 const newDress:Dress={
    title: data.get("כותרת השמלה")?.toString(),
    color: data.get("צבע")?.toString(),
    fubricType: data.get("סוג בד")?.toString(),
    // price:((Number)(data.get('מחיר'))?),
    // category:(data.get(' קטגוריה')),
    image: data.get("תמונה")?.toString(),
};
 };

 
 
 

  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "hotpink" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              הוספת שמלה חדשה
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="כותרת השמלה"
                    required
                    fullWidth
                    id="כותרת השמלה"
                    label="כותרת השמלה"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="צבע"
                    label="צבע"
                    name="צבע"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="סוג בד"
                    label="סוג בד"
                    name="סוג בד"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="מחיר"
                    label="מחיר"
                    name="מחיר"
                    autoComplete="family-name"
                  />
                  <br></br><br></br>
                  {/* {לשאול את אביגיל כמה היא רוצה שזה יזוז?} */}
                  <Grid style={{marginLeft:"45px"}}item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="קטגוריה"
                      label="קטגוריה"
                      name="קטגוריה"
                      autoComplete="family-name"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="תמונה"
                    label="תמונה"
                    type="תמונה"
                    id="תמונה"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                לסיום והוספה
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
  );
}