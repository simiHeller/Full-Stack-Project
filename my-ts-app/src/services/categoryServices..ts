import axios from "axios";
import  Category  from "../models/Category";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/category"
});

export const createCategory=(newCategory:Category)=>API.post("",newCategory);

export const fetchCategories = () => API.get("/categorys");

export const fetchSingleCategory = async (id:number) => await API.get(`/${id}`)

export const deleteCategory =  (id:number) =>  API.delete(`/${id}`);

export const updateCategory = (category:Category) => API.put(`/${category.id}`, category)