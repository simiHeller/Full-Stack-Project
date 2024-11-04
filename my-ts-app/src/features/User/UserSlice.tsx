
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createUser, fetchUserByPassword, fetchUsers} from '../../services/UserServices.'
import User from '../../models/User';
import {updateUser} from '../../services/UserServices.';
import p10 from '../../image/10.jpg';
import p5 from '../../image/p5.png';
import p4 from '../../image/p4.png';
import p6 from '../../image/p6.jpg';
import { PayloadAction } from '@reduxjs/toolkit';

export  const getUser = createAsyncThunk("user/getUser",async ()=> {
    const {data}= await fetchUsers();
    return data;
});

export const postUser = createAsyncThunk("user/post", 
    async (newUser: User) => {
        const {data} = await createUser (newUser);
        return data;
});
export const getUserByPassword = createAsyncThunk(
    "user/getUserByPassword",
    async (Password: String) => {
        const {data} = await fetchUserByPassword(Password);
        return data;
});
export const deleteUser = createAsyncThunk(
    "user/delete",
    async (id:number) => {
        await deleteUser(id); 
    return id;
});

export const putUser = createAsyncThunk(
    "user/update",
    async (user:User) => {
        const {data} = await updateUser(user);
        return data;
    });
// מה שאנחנו רוצים לעשות: לעשות רדוסר שיחתוך את המערך
//כדי להוסיף איבר
export interface userState{
    users:Array <User>,
    user:User,
    status: boolean,
}
const initialState:userState={
  users: [],
    user: {},
    status:false

}
//מתי זה קורה לא כ"כ הבנתי....
export const userSlice=createSlice({
    name: 'res',
    initialState,
    reducers: {
        addUser: (state:any, action: PayloadAction<any>) => {
        state.users.push(action.payload)
      },
      //פונקציה ששומרת את המשתמש החדש
      saveUser:(state:any,action: PayloadAction<any>)=>{
          state.user=action.payload;
      }

    },
    extraReducers: builder => {
        //פעולה הצליחה
        builder.addCase(getUserByPassword.fulfilled,(state, action: PayloadAction<any>)=>{
            state.user=action.payload;
            
        }).addCase(getUser.pending, (state:any)=>{
            state.status=true;
        }).addCase(postUser.fulfilled,(state:any, action: PayloadAction<any>)=>{
            state.user=action.payload;
            state.users.push(action.payload);
        });
        
    //מחיקת 
    builder.addCase(deleteUser.fulfilled,(state:any, action:PayloadAction<any>)=>{
        let useres=state.users.find((u:User)=>u.id!==action.payload)
        state.users=useres;
    });  
    builder.addCase(getUser.fulfilled,(state:any, action: PayloadAction<any>)=>{
        state.users=action.payload;
    })
    },
});
export const { addUser ,saveUser} = userSlice.actions
export default userSlice.reducer
