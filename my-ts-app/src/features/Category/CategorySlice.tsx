import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createCategory, deleteCategory, fetchCategories, updateCategory } from '../../services/categoryServices.';
import  Category  from '../../models/Category';


export const getcategories = createAsyncThunk("category/getcategories", async () => {
  const { data } = await fetchCategories();
  return data;
});

export const postCategory = createAsyncThunk(
  "category/post",
  async (newCategory: Category) => {
    const { data } = await createCategory(newCategory);
    return data;
  }
);

export const deleteCategoryById = createAsyncThunk(
  "category/delete",
  async (id: number) => {
    await deleteCategory(id);
    return id;
  }
);


export const putCategory = createAsyncThunk(
  "Category/update",
  async (category:Category) => {
    const { data } = await updateCategory(category);
    return data;
  }
);
export interface categoriestate {
  categories: Array<Category>,
    status:boolean
}

const initialState:categoriestate = {
  categories:[],
    status:false
}

export const categorieslice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    addCategory: (state:any, action: PayloadAction<any>) => {
      state.categories.push(action.payload)
    },
  },

  extraReducers: (builder) => {

    builder.addCase(getcategories.fulfilled,(state:any, action: PayloadAction<any>)=>{
      state.categories=action.payload;
      state.status=false;
    })

    builder.addCase(getcategories.pending,(state:any)=>{
      state.status=true;
    })

    builder.addCase(getcategories.rejected,(state:any, action: PayloadAction<any>)=>{
  
    })
    builder.addCase(deleteCategoryById.fulfilled,(state:any, action: PayloadAction<any>)=>{
      let categories=state.categories.filter((x:Category)=>x.id!==action.payload)
      state.categories=categories;
    })
},
});
export const { addCategory } = categorieslice.actions

export default categorieslice.reducer
