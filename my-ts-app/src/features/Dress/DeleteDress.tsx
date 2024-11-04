import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addDress, getDress, postDress } from "./dressSlice";
import Dress from "../../models/Dress";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deflate } from "zlib";
export default function DeleteDress(){
    React.useEffect(() => {
      dispatch(getDress());
    }, []);
    const dispatch: AppDispatch = useDispatch();
    const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
    const dress = useSelector((state: RootState) => state.DressReducer.dress);
    const nav = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };
     return(
    <>  

    </>
     ); 
    };
