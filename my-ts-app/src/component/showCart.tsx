
import React from "react";
import { useSelector } from "react-redux";
import { Button, Card} from "semantic-ui-react";
import { RootState } from "../app/store";
import Dress from "../models/Dress";
import { Image } from 'semantic-ui-react'
import List from '@mui/material/List';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ShowCart(){
    const cart=useSelector((state: RootState) => state.DressReducer.cart);
    const nav=useNavigate();
    const handeclick=()=>{
        nav('/AddRent');
    }
return (
    <>
    <h1>סל הקניות שלך</h1>
    {cart.map((c:Dress)=>{
       
         return <List style={{border:"5px solid black",width:"17vw",
         display:'inline-block',marginTop:'3vw'}} >
      
        
        <Card
          style={{ marginTop: '16' }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
         {<Image src={"image/"+c.image} size='medium' circular 
        style={{width: '15vw', height: '40vh'} } ></Image>} 
         {c.title} {c.color} {c.fubricType} 
       
        </Card>
      </List>
    })}<div><br></br><br></br>
    {cart.length>0?(<Button style={{color:'black',fontSize:"2vw", alignItems: 'center'}}
     onClick={handeclick}><ArrowBackIosIcon/></Button>):"סל הקניות שלך ריק"}
    <br></br><br></br></div>
    </>
    
)
};