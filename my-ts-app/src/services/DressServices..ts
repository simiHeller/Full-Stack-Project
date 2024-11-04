import Dress from "../models/Dress";
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/dress",
});

export const createDress=(newDress:Dress)=>API.post("",newDress);

export const fetchDresses = () => API.get("/dresses");

export const fetchSingleDress = (id:number) => API.get(`/${id}`)


export const deleteDress =  (id:number) =>  API.delete(`/${id}`);


export const updateDress = (dress:Dress) => API.put(`/${dress.id}`, dress)
