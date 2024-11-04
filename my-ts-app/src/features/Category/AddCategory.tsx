import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "./CategorySlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  let Category = { name: "add Category" };


  return (
    <>
      <button onClick={() => dispatch(addCategory(Category))}>add Category</button>
    </>
  );
};
export default AddCategory;