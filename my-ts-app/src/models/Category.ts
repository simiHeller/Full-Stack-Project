import Dress from "./Dress";

export default interface Category {
 id?:number
 name?:String ;
 descraption?:String ;
 listDress:Array<Dress>;
  }