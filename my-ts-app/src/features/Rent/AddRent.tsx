import { Box, Button, Checkbox, FormControlLabel, Grid, Slider, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AppDispatch, RootState } from "../../app/store";
import { getRent, postRent } from "./RentSlice";
import { deleteCart, getDress, postDress } from "../Dress/dressSlice";
import Rent from "../../models/Rent";
import state from "sweetalert/typings/modules/state";
import { getUser } from "../User/UserSlice";
import Dress from "../../models/Dress";
import Swal from "sweetalert2";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props:any) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const AddRent=()=>{

  
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  React.useEffect(() => {
    dispatch(getDress());
    dispatch(getUser());
    dispatch(getRent());
  }, []); 
  const handleChange = (newValue:any) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dress = useSelector((state: RootState) => state.DressReducer.dress);
const cart=useSelector((state: RootState) => state.DressReducer.cart);

  const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
    const nav=useNavigate();

    let date = new Date(); 
    const lateDate = addDays(3, date);
    const dispatch:AppDispatch=useDispatch();
    const user = useSelector((state: RootState) => state.userReducer.user);
    const finishOrder = () => {
        cart.map((d: Dress) => {
            dispatch(postRent({
                lendingDate: date,
                returnDate: lateDate,
                user: user,
                dress: d,
            }))
        })

        dispatch(deleteCart(0));
       
        Swal.fire({
          title: 'פריט נוסף בהצלחה לרשימת ההשאלה שלך',
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: 'success'})
        nav('/')
    }

    return(<>

       <div>
      <Button style={{marginTop:"18vw",width:"13vw",height:"10vh",color:"white",
      backgroundColor:"black",fontSize:"5vh",backgroundSize: 'cover'}} variant="outlined"  onClick={handleClickOpen}>
        תשלום
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle  onClose={handleClose}>
          פרטי תשלום
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="mail"
                  required
                  fullWidth
                  id="mail"
                  label="mail"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phoneNumber"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Credit card number"
                  label="Credit card number"
                  name="CreditCardNumber"
                  autoComplete="Credit card number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="CVV"
                  required
                  fullWidth
                  id="CVV"
                  label="CVV"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="validity"
                  required
                  fullWidth
                  id="validity"
                  label="validity"
                  autoFocus
                />
              </Grid>
            
              <Grid  item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button onClick={finishOrder}
            >
              אישור
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid> 
        </Box>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </BootstrapDialog>
    </div>
       </>)

};
export default AddRent;
function addDays(numOfDays: number, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setDate(dateCopy.getDate() + numOfDays);

  return dateCopy;
}
