import ShopIcon from "../assets/icons/Shop";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/icons/Search";
import { FC } from "react";
import InputField from "./InputField";
import { useSelector } from "react-redux";
import {selectCartReducer} from "../redux/cartSlice.ts"
import Plus from "../assets/icons/Plus.tsx";

interface IProps {
   toggle: React.MouseEventHandler<HTMLDivElement>;
   handleInputChange: any;
 }
 
 const Header: FC<IProps> = ({ toggle, handleInputChange}) => {

   const cart = useSelector(selectCartReducer);

   const getTotalQuantity = () => {
     let total = 0
     cart.forEach(item => {
       total += item.quantity
     })
     return total
   }

    return (
      <header className="my-4 h-9 flex text-textColor border-b-2 border-borderColor">
         <div className="grow flex ">
            <Link to="/admin" >
               <div className="hover:text-linkHover mr-4 flex"><Plus /> Article</div>
            </Link>
         </div>
         <div className="grow-2 flex">
            <Link to="/home" >
               <div className="hover:text-linkHover mr-4">Home</div>
            </Link>
            <Link to="/contact" >
               <div className="hover:text-linkHover mr-4">Contact</div>
            </Link>
         </div>
         <div className="grow flex">
            <div className="ml-auto flex">
               <InputField 
                  type="text"
                  name="title"
                  className="text-black rounded h-6"
                  onChange={(e) => handleInputChange(e)}
               />
               <SearchIcon />
               <div  onClick={toggle} className="flex ml-4 cursor-pointer" >
                  <ShopIcon />
                  <span className="bg-errorColor rounded-full w-[20px] h-[20px] mx-auto top-2 right-60 items-center flex justify-center">{getTotalQuantity() || 0}</span> 
               </div>
            </div>
         </div>
      </header>
    );
};

export default Header;

