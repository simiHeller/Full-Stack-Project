import axios from "axios";
import  Rent  from "../models/Rent";

export const API = axios.create({
    baseURL: "http://localhost:8585/api/rent",
});

export const createRent=(newRent:Rent)=>API.post("",newRent);

export const fetchRents = () => API.get("/rents");

export const fetchSingleRent = async (id:number) => await API.get(`/${id}`)

export const deleteRent =  (id:number) =>  API.delete(`/${id}`);

export const updateRent = (rent:Rent) => API.put(`/${rent.id}`, rent)