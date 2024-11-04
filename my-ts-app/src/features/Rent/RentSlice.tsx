import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {createRent,fetchRents,updateRent} from '../../services/RentServices.'
import Rent from "../../models/Rent";

export const getRent = createAsyncThunk("rent/getRent", async () => {
  const { data } = await fetchRents();
  return data;
});

export const postRent = createAsyncThunk("rent/post", 
async (newRent: Rent) => {
  const { data } = await createRent(newRent);
  return data;
});

export const deleteRent = createAsyncThunk(
  "rent/delete",
  async (id: number) => {
    await deleteRent(id);
    return id;
  }
);

export const putRent = createAsyncThunk("rent/update", async (rent: Rent) => {
  const { data } = await updateRent(rent);
  return data;
});
export interface RentState {
  Rents: Array<Rent>;
  Rent:Rent;
  status: boolean;
  history: Array<Rent>;
}

const initialState: RentState = {
  Rents: [],
  Rent:{},
  status: false,
  history: [],
};

export const RentSlice = createSlice({
  name: "Rent",
  initialState,
  reducers: {
    addRent: (state, action: PayloadAction<any>) => {
      state.Rents.push(action.payload);
    },
    saveRent:(state:any,action: PayloadAction<any>)=>{
      state.dress=action.payload;
    }
  },

  extraReducers: (builder:ActionReducerMapBuilder<any>) => {
    builder.addCase(getRent.fulfilled, (state:any, action: PayloadAction<any>) => {
      state.Rents = action.payload;
    });

    builder.addCase(getRent.pending, (state:any) => {
      state.status = true;
    });
    builder.addCase(postRent.fulfilled,(state:any, action: PayloadAction<any>)=>{
      state.Rent=action.payload;
      state.Rents.push(action.payload);
      });
builder.addCase(deleteRent.fulfilled,(state:any, action:PayloadAction<any>)=>{
  let Rents=state.Rents.filter((r:Rent)=>r.id!==action.payload)
  state.Rents=Rents;
})
},
})
export const { addRent,saveRent } = RentSlice.actions;

export default RentSlice.reducer;
