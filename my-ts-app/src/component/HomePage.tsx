import { addDress } from '../features/Dress/dressSlice';
import p3 from '../3.jpg'
import p13 from '../13.jpg'
import p12 from '../12.png'
import SignIn from "../features/User/signIn";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div style={{
      top: "0px",
      backgroundColor: 'white',
      backgroundImage: 'url(' + p13 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '99vw',
      height: '110vh', minHeight: '100%', minWidth: '100%', position: 'fixed'
    }}>
    </div>
  )
}
export default HomePage;