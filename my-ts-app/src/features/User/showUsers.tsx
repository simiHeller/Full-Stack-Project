import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../models/User';

function createData(
    id:number,
    password: String,
    firstName:String,
    lastName:String ,
    phoneNumber: String ,
    mail:String,
    status: number 
) {
}

const ShowUsers=()=> {

  const users = useSelector((state: RootState) => state.userReducer.users);
  console.log(users+"users")
      const user = useSelector((state: RootState) => state.userReducer.user);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}>שם פרטי</TableCell>
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}align="right">שם משפחה</TableCell>
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}align="right">טלפון</TableCell>
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}align="right">מייל</TableCell>
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}align="right">סיסמא</TableCell>
            <TableCell style={{fontWeight:'bold',fontSize:'1vw'}}align="right">סטטוס</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u:User) => (
            <TableRow
              key={u.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {u.firstName}
              </TableCell>
              <TableCell align="right">{u.lastName}</TableCell>
              <TableCell align="right">{u.phoneNumber}</TableCell>
              <TableCell align="right">{u.mail}</TableCell>
              <TableCell align="right">{u.password}</TableCell>
              <TableCell align="right">{u.status}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ShowUsers;