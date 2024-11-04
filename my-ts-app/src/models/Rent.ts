import Dress from "./Dress";
import User from "./User";

export default interface Rent {
 id?:number|undefined;
 lendingDate?:Date|undefined ;
 returnDate?:Date |undefined;
 dress?:Dress;
 user?:User;
  }