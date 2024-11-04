
import {ActionReducerMapBuilder, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createDress, fetchDresses} from '../../services/DressServices.'
import { deleteDress } from '../../services/DressServices.';
import Dress from '../../models/Dress';
import {updateDress} from '../../services/DressServices.';
import p10 from '../../image/10.jpg';
import p5 from '../../image/p5.png';
import p4 from '../../image/p4.png';
import p6 from '../../image/p6.jpg';
import { PayloadAction } from '@reduxjs/toolkit';

export  const getDress = createAsyncThunk("dress/getDress",async ()=> {
    const {data}= await fetchDresses();
    return data;
});

export const  postDress = createAsyncThunk("dress/post", 
    async (newDress: Dress) => {
        const {data} = await createDress (newDress);
        return data;
});

export const DeleteDress = createAsyncThunk(
    "dress/DeleteDress",
    async (id:number) => {
    deleteDress(id); 
    return id;
});

export const putDress = createAsyncThunk(
    "dress/update",
    async (dress:Dress) => {
        const {data} = await updateDress(dress);
        return data;
    });
// מה שאנחנו רוצים לעשות: לעשות רדוסר שיחתוך את המערך
//כדי להוסיף איבר
export interface dressState{
    dresses:Array <Dress>,
    dress:any,
    status: boolean,
    cart:Array<Dress>

}
const initialState:dressState={
  dresses: [],
    dress: {},

    status:false,
    cart:[]

}

export const dressSlice=createSlice({
    name: 'res',
    initialState,
    reducers: {
        addDress: (state:any, action: PayloadAction<any>) => {
        state.dresses.push(action.payload)
      },
      
      addToCart: (state, action: PayloadAction<Dress>) => {
        state.cart.push(action.payload)
      },
      saveDress:(state:any,action: PayloadAction<any>)=>{
        state.dress=action.payload;
      },
      delDress:(state:any,action:PayloadAction<any>)=>{
          state.dresses.delete(action.payload);
      },
      deleteCart: (state:any, action: PayloadAction<any>) => {
        state.cart=[];
      }
    },
    extraReducers:(builder: ActionReducerMapBuilder<any>)=> {
        //פעולה הצליחה
        builder.addCase(getDress.fulfilled,(state:any, action: PayloadAction<any>)=>{
            state.dresses=action.payload;
            // state.status=false;
        });
        //אמצע הפעולה
        builder.addCase(getDress.pending, (state:any)=>{
            state.status=true;
        });
///
        builder.addCase(postDress.fulfilled,(state:any, action: PayloadAction<any>)=>{
        state.dress=action.payload;
        state.dresses.push(action.payload);
    // state.status=false;
        });
        //מחיקת שמלה
        builder.addCase(DeleteDress.fulfilled,(state:any, action:PayloadAction<any>)=>{
        let dresses=state.dresses.filter((d:Dress)=>d.id!==action.payload)
        state.dresses=dresses;
    })
    },
})
export const { addDress,saveDress,addToCart,delDress,deleteCart} = dressSlice.actions
export default dressSlice.reducer
