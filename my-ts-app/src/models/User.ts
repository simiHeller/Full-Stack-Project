import Rent from "./Rent";

export default interface User {
  id?:number,
    password?: String|undefined ;
    firstName?:String|undefined ;
    lastName?:String |undefined;
    phoneNumber?: String |undefined;
    mail?:String|undefined; 
    status?: number|undefined ;
    // rentUserList?:Array<Rent>;
  }