import User from "../models/User";
import axios from "axios";
import { Password } from "@mui/icons-material";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/user",
  
});

export const createUser=(newUser:User)=>API.post("",newUser);

export const fetchUsers = () => API.get("/users");

export const fetchSingleUser = (id:number) => API.get(`/${id}`)


export const deleteUser =  (id:number) =>  API.delete(`/${id}`);


export const updateUser = (user:User) => API.put(`/${user.id}`, user)
export const fetchUserByPassword=(Password:String)=>API.get(`/bypass/${Password}`);