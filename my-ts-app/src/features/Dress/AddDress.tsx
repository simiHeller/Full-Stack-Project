import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addDress, getDress, postDress } from "./dressSlice";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dress from "../../models/Dress";
import { ThemeProvider } from "@emotion/react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme();
const AddDress = () => {
  React.useEffect(() => {
    dispatch(getDress());
  }, []);
  const dispatch: AppDispatch = useDispatch();
  const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
  const nav = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newDress: Dress = {
      title: data.get("כותרת השמלה")?.toString(),
      color: data.get("צבע")?.toString(),
      fubricType: data.get("סוג בד")?.toString(),
      image: data.get("תמונה")?.toString(),
    };

    dispatch(postDress(newDress));
    alert("השמלה הוספה בהצלחה")
    nav("/dresses");
    console.log(newDress);
    console.log(dresses);
  };
  return (
    <>
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
                  <Grid item xs={12} sm={6}>
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
    </>
  );
};
export default AddDress;
