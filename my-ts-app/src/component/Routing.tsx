
import { Route, Routes, useRoutes } from 'react-router-dom';
import ShowDress from '../features/Dress/showDress';
import SignIn from "../features/User/signIn";
import SignUp from '../features/User/signUp';
import HomePage from "./HomePage";
import OurStory from './ourStory';
import Like from './like';
import Na from './navbars/Navbar';
import ContactForm from './contactForm';
import AddDress from '../features/Dress/AddDress';
import ShowUsers from '../features/User/showUsers';
import AddRent from '../features/Rent/AddRent';
import ShowCart from '../component/showCart';
import UpdateDress from '../features/Dress/updateDress'
const Routing = () => {
    let element = useRoutes([
        { path:"",element:<HomePage/>},
        { path: "home", element: <HomePage/> },
        { path: "dresses", element: <ShowDress/> },
        { path: "ourStory", element: <OurStory/> },
        { path: "signIn", element: <SignIn/> },
        { path: "signUp", element: <SignUp/> },
        { path: "addDress", element: <AddDress/> },
        {path:'showUsers', element: <ShowUsers/>},
        { path: "Na", element: <Na/>},
        { path: "p", element: <Like/> },
        { path:"contact",element:<ContactForm/>},
        {path: "AddRent", element:<AddRent/>},
        {path: "showCart", element: <ShowCart/>},
        {path:"updateDress",element:<UpdateDress/>}

    ]);


    return element;
}
export default Routing;