import Category from "./Category";
import Rent from "./Rent";

export default interface Dress {
  id?: number|undefined;
  title?:String;
  color?:String;
  fubricType?:String;
  price?:bigint;
  categoryId?:number
  rent?:Rent;
  rentList?:Array<Rent>;
  image?:String;
 }