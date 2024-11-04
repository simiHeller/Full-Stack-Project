// // import { useSelector } from "react-redux";
// // import { RootState } from "../../app/store";
// // import Dress from "../../models/Dress";
// // import AddDress from './AddDress'
// // const ShowDress =() =>{
// //     const Dresses=useSelector((state:RootState)=>state.DressReducer.Dresses)
// //     return(<>
// //     <h1>dresssss</h1>
// //     {Dresses && Dresses.map((d:Dress)=><ul><li>{d.color}</li></ul> )}
// //     <AddDress/>
// //     </>)
// // }
// // export default ShowDress;
// // import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect } from "react";
// //////////////////////////////////////////////////////////////////////////////
// ///////////============================================================

// // const ShowDress = () => {
// //     const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
// //     const status = useSelector((state: RootState) => state.DressReducer.status);
// //     console.log(dresses);
// //     const dispatch:AppDispatch=useDispatch();
// //   //בעת עלית הקומפוננטה אחרי הרינדור הראשוני
// //   useEffect(() => {
// //     dispatch(getDress());
// //   }, []);

// //   return <>
// //   </>;
// // };
// // export default ShowDress;

// // // import {t} from '../Dress/t'; 

// // const ShowDress=()=>{
// //     const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
// //     const status = useSelector((state: RootState) => state.DressReducer.status);
// //     console.log(dresses);
// //     const dispatch=useDispatch();


// //     useEffect(()=>{
// //         // dispatch(getDress());
// //     },[]);
// //     return(<>
// //===============================================================
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import { Typography, ImageListItem } from '@mui/material';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import TagFacesIcon from '@mui/icons-material/TagFaces'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import p10 from '../../image/10.jpg'
// import Dress from "../../models/Dress";
// import p6 from '../../image/p6.jpg';
// import { Button, DialogTitle } from "@mui/material";
// import { DialogContent } from "@mui/material";
// import { Dialog } from "@mui/material";
// import { DialogContentText } from "@mui/material";
// import { DialogActions } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../app/store";
// import { addToCart, DeleteDress, getDress } from './dressSlice';
// import AddDress from './AddDress';
// import { Image } from 'semantic-ui-react'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import filterDress from './filterDress';
// import DeleteIcon  from '@mui/icons-material/Delete';
// import { Tab } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// // import Swal from "sweetalert2";



// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ShowDress() {
//   const [expanded, setExpanded] = React.useState(false);
//   const [product, setProduct] = useState<Dress>({ id: undefined, title: "", color: "", fubricType: "", price: undefined, image: "" })
//   const cart = useSelector((state: RootState) => state.DressReducer.cart);
//   const [count, setCount] = useState(1);
//   const loginUser = useSelector((state: RootState) => state.userReducer.user);

//   //הוספת מוצר לסל
//   const selectDress = (c: Dress) => {
//     if(count!=0)
//     {
//       setOpen(false);
//       setCount(1);
//     }
//     else{
//       alert("לא נבחר כמות להוספה, הקש כמות תקנית..")
//     }

//     dispatch(addToCart(c));
//   }
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const dispatch: AppDispatch = useDispatch();
//  React.useEffect(() => {
//     dispatch(getDress());
//   }, []);
//   const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
//   const [filter, setFilter] = useState(dresses);
//   // const status = useSelector((state: RootState) => state.DressReducer.status);
//   // console.log(dresses);
 

//   const add = () => {
//     setCount(count + 1);
   
//   }

//   const remove = () => {
//     if (count != 0)
//       setCount(count - 1)
//     // console.log(count)
//   }
//   const nav = useNavigate();
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = (d: any) => {
//     setOpen(true);
//     setProduct(d);
//   }
//   const handleClose = () => {
//     setCount(1);
//     setOpen(false);
//   };
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open1 = Boolean(anchorEl);
//   const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose1 = () => {
//     const women = dresses.filter((d: Dress) => d.categoryId == 1);
//     setAnchorEl(null);
//     // console.log(women)

//     setFilter(women);
//     // nav(`/filterDress/${women}`)
//   }
//   const handleClose2 = () => {
//     const women = dresses.filter((d: Dress) => d.categoryId == 2);
//     setFilter(women);
//     setAnchorEl(null);
//   }
//   const handleClose3 = () => {
//     const women = dresses.filter((d: Dress) => d.categoryId == 3);
//     // console.log(women)
//     setFilter(women);
//     setAnchorEl(null);
//   }
//   const handleClose4 = () => {
//     const women = dresses.filter((d: Dress) => d.categoryId == 4);
//     setFilter(women);
//     setAnchorEl(null);
//   }
//   const handleClose5 = () => {
//     setFilter(dresses);
//     setAnchorEl(null);
//   }
//   const Delete=(d:Dress)=>{
//     // const d1=dresses.find((x)=>x.id==d.id);
//     //לשאול למה לא עובד?
//     console.log(d.id+"--------------------")
//     dispatch(DeleteDress((Number)(d.id)))
//     // nav('/DeleteDress');

//   }
//   const UpdateDress=(d:Dress)=>{
//     nav('/updateDress')
//   }
//   return (
//     <>
//       <div>
//         <Button style={{width:'7vw',height:"5vh", alignItems: 'center',
//         border:"1px solid black",fontSize:"25px",marginTop:"1%",color:"black"}}
//           id="basic-button"
//           aria-controls={open ? 'basic-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClick1}
//         >
//           מיין לפי
//         </Button>
//         <br></br><br></br>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open1}
//           onClose={handleClose1}
//           MenuListProps={{
//             'aria-labelledby': 'basic-button',
//           }}
//         >
//           <MenuItem onClick={handleClose1}>נשים</MenuItem>
//           <MenuItem onClick={handleClose2}>ילדות</MenuItem>
//           <MenuItem onClick={handleClose3}>שמלות חורף</MenuItem>
//           <MenuItem onClick={handleClose4}>שמלות קיץ</MenuItem>
//           <MenuItem onClick={handleClose5}>הכל</MenuItem>

//         </Menu>
//       </div>
//       {/* <button onClick={() => dispatch(AddDress())}>add</button>     */}
//       {/* {console.log(filter)} */}
//       <div>

//         {filter.map((d: Dress, i: number) => (

//           <Card key={i} sx={{ maxWidth: 750}} style={{ display: "inline-block", padding: ' 1rem 1rem' }}>
//             <ImageListItem key={d.id} >
//               {d.image && <Image src={"image/" + d.image} size='medium' circular
//                 style={{ width: '15vw', height: '38vh' }}
//               ></Image>

//               }</ImageListItem>
//             {/* <CardMedia 
//       component="img"
//       height="194"
//       image={require(`../../image/`+d.img)}
//        >
//       </CardMedia> */}
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 {d.title}  {d.fubricType}  {d.color}
//                 <br></br>
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites" >
//                 <FavoriteIcon />
 
//               </IconButton>
//               {/* (<button onClick={()=>Delete(d)}> */}
//          {loginUser.status==0? (
//             // <Tab onClick={()=>{Delete(d)}} icon={<DeleteIcon />} aria-label="favorite" />
//             <IconButton onClick={()=>{Delete(d)}} aria-label="add to favorites" >
//                 <DeleteIcon />
 
//               </IconButton>  
//             ):null}
//               {loginUser.status==0? (
//            <IconButton  onClick={()=>{UpdateDress(d)}} aria-label="add to favorites" >
//            <RefreshIcon />

//          </IconButton>  
//             ):null}
// {/* לא כ"כ אהבתי אותו... */}
//               {/* <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton> */}

//               <Button variant="outlined" onClick={() => handleClickOpen(d)}>
//                 ? רוצה לראות יותר
//               </Button>

//               <Dialog style={{marginTop:"6%"}}
//                 open={open}
//                 // onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"

//               >
//                 <Image src={"/image/" + product.image} size='medium' circular
//                   style={{ width: '25vw', height: '65vh' }}
//                 ></Image>
//                 <div style={{ color: 'deeppink', textAlign: 'center' }}>
//                   שם הפריט:   {product.title} <br></br><br></br>
//                   צבע:   {product.color}<br></br>
//                 </div>



//                 <DialogActions>
//                   <button  onClick={(e) => { add() }}><AddIcon /></button>
//                   {count}
//                   <button onClick={remove}><RemoveIcon /></button>

//                   <Typography gutterBottom textAlign={"center"}></Typography>
                  
//                   <Button onClick={handleClose} autoFocus>
//                     סגור
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             </CardActions>


//             <br></br><br></br><br></br>
//           </Card>
//         ))}</div>
//     </>
//   );
// }

// // // {/* <AddDress></AddDress> */}



// //     </>)
// // }
// //  export default ShowDress;
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import Dress from "../../models/Dress";
// import AddDress from './AddDress'
// const ShowDress =() =>{
//     const Dresses=useSelector((state:RootState)=>state.DressReducer.Dresses)
//     return(<>
//     <h1>dresssss</h1>
//     {Dresses && Dresses.map((d:Dress)=><ul><li>{d.color}</li></ul> )}
//     <AddDress/>
//     </>)
// }
// export default ShowDress;
// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect } from "react";
//////////////////////////////////////////////////////////////////////////////
///////////============================================================

// const ShowDress = () => {
//     const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
//     const status = useSelector((state: RootState) => state.DressReducer.status);
//     console.log(dresses);
//     const dispatch:AppDispatch=useDispatch();
//   //בעת עלית הקומפוננטה אחרי הרינדור הראשוני
//   useEffect(() => {
//     dispatch(getDress());
//   }, []);

//   return <>
//   </>;
// };
// export default ShowDress;

// // import {t} from '../Dress/t'; 

// const ShowDress=()=>{
//     const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
//     const status = useSelector((state: RootState) => state.DressReducer.status);
//     console.log(dresses);
//     const dispatch=useDispatch();


//     useEffect(()=>{
//         // dispatch(getDress());
//     },[]);
//     return(<>
//===============================================================
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Typography, ImageListItem } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TagFacesIcon from '@mui/icons-material/TagFaces'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import p10 from '../../image/10.jpg'
import Dress from "../../models/Dress";
import p6 from '../../image/p6.jpg';
import { Button, DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addToCart, DeleteDress, getDress } from './dressSlice';
import AddDress from './AddDress';
import { Image } from 'semantic-ui-react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon  from '@mui/icons-material/Delete';
import { Tab } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import Like from '../../component/like';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShowDress() {
  const [expanded, setExpanded] = React.useState(false);
  const [product, setProduct] = useState<Dress>({ id: undefined, title: "", color: "", fubricType: "", price: undefined, image: "" })
  const cart = useSelector((state: RootState) => state.DressReducer.cart);
  const [count, setCount] = useState(1);
  const loginUser = useSelector((state: RootState) => state.userReducer.user);

  //הוספת מוצר לסל
  const selectDress = (c: Dress) => {
    if(count!=0)
    {
      setOpen(false);
      setCount(1);
    }
    else{
      alert("לא נבחר כמות להוספה, הקש כמות תקנית..")
    }

    dispatch(addToCart(c));
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch: AppDispatch = useDispatch();
 React.useEffect(() => {
    dispatch(getDress());
  }, []);
  const dresses = useSelector((state: RootState) => state.DressReducer.dresses);
  const [filter, setFilter] = useState(dresses);

  const add = () => {
    setCount(count + 1);
   
  }

  const remove = () => {
    if (count != 0)
      setCount(count - 1)
  }
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (d: any) => {
    setOpen(true);
    setProduct(d);
  }
  const handleClose = () => {
    setCount(1);
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    const women = dresses.filter((d: Dress) => d.categoryId == 1);
    setAnchorEl(null);

    setFilter(women);
  }
  const handleClose2 = () => {
    const women = dresses.filter((d: Dress) => d.categoryId == 2);
    setFilter(women);
    setAnchorEl(null);
  }
  const handleClose3 = () => {
    const women = dresses.filter((d: Dress) => d.categoryId == 3);
    setFilter(women);
    setAnchorEl(null);
  }
  const handleClose4 = () => {
    const women = dresses.filter((d: Dress) => d.categoryId == 4);
    setFilter(women);
    setAnchorEl(null);
  }
  const handleClose5 = () => {
    setFilter(dresses);
    setAnchorEl(null);
  }
  const Delete=(d:Dress)=>{
   
    dispatch(DeleteDress((Number)(d.id)))

  }
  const UpdateDress=(d:Dress)=>{
    nav('/updateDress')
  }
  return (
    <>
      <div>
        <Button style={{width:'7vw',height:"5vh", alignItems: 'center',
        border:"1px solid black",fontSize:"25px",marginTop:"1%",color:"black"}}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick1}
        >
          מיין לפי
        </Button>
        <br></br><br></br>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose1}>נשים</MenuItem>
          <MenuItem onClick={handleClose2}>ילדות</MenuItem>
          <MenuItem onClick={handleClose3}>שמלות חורף</MenuItem>
          <MenuItem onClick={handleClose4}>שמלות קיץ</MenuItem>
          <MenuItem onClick={handleClose5}>הכל</MenuItem>

        </Menu>
      </div>
 
      <div>

        {filter.map((d: Dress, i: number) => (

          <Card key={i} sx={{ maxWidth: 750,maxHeight:550}} style={{ display: "inline-block", padding: ' 1rem 1rem' }}>
            <ImageListItem key={d.id} >
              {d.image && <Image src={"image/" + d.image} size='medium' circular
                style={{ width: '15vw', height: '45vh' }}
              ></Image>

              }</ImageListItem>
        
            <CardContent>
              <Typography variant="body2" color="text.secondary"   fontWeight="bold">
                {" תאור השמלה:  " +d.title}  <br></br>{"מחיר:  "+d.price?.toString()+"  שח  "}
                <br></br>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
 
              </IconButton>
         {loginUser.status==0? (
            <IconButton onClick={()=>{Delete(d)}} aria-label="add to favorites" >
                <DeleteIcon />
 
              </IconButton>  
            ):null}
              {loginUser.status==0? (
           <IconButton  onClick={()=>{UpdateDress(d)}} aria-label="add to favorites" >
           <RefreshIcon />

         </IconButton>  
            ):null}

              <Button variant="outlined" onClick={() => handleClickOpen(d)}>
                ? רוצה לראות יותר
              </Button>

              <Dialog style={{marginTop:"2.5%"}}
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

              >
                <Image src={"/image/" + product.image} size='medium' circular
                  style={{ width: '25vw', height: '70vh' }}
                ></Image>
                <div style={{ color: 'black', textAlign: 'center' }}>
                {" תאור השמלה:  " +product.title} ,{"צבע: "+product.color}<br></br>
                , {"סוג בד: "+product.fubricType}<br></br>
                {"מחיר:  "+product.price?.toString()+"  שח  "} 
                </div>


                {loginUser.status==1?( <DialogActions>
               <Button>
                 <AddIcon onClick={(e) => { add() }} style={{color:"black"}}/></Button>
                  {count}
                  <Button>
                  <RemoveIcon onClick={remove} style={{color:"black"}}/>   </Button>
                  <Button onClick={() => selectDress(product)} style={{color:"black"}}><AddShoppingCartIcon /></Button>

                  <Typography gutterBottom textAlign={"center"}></Typography>
               
                
                </DialogActions> ):null} 
                 <Button onClick={handleClose} style={{color:"black"}} autoFocus>
                    סגור
                  </Button>
              </Dialog>
            </CardActions>


            <br></br><br></br><br></br>
          </Card>
        ))}</div>
    </>
  );
}
