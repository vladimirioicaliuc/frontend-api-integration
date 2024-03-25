import { useCartContext}  from '../../context/cartProvider.tsx'
import Close from '../../assets/icons/Close.tsx';
import Plus from '../../assets/icons/Plus.tsx';
import Minus from '../../assets/icons/Minus.tsx';
import { incrementQuantity, decrementQuantity, clearCart, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import {selectCartReducer} from "../../redux/cartSlice.ts"

export const Cart = ({ showModal, toggle }) => {

  const dispatch = useDispatch()
  const {  getCartTotal } = useCartContext();
  const cart = useSelector(selectCartReducer);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id))
  }

  return (
    showModal && (
      <div className="flex-col flex fixed inset-0 sm:left-1/2 xl:left-3/4 bg-white gap-8 px-4 py-10 text-black">
        <h1 className="text-lg font-bold">Shopping Cart</h1>
        <div className="absolute right-8 top-10 cursor-pointer"  onClick={toggle}>
          <Close  />
        </div>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div className="flex items-center" key={item.id}>
              <div className="flex gap-4 mr-24">
                <img src={item.imageUrl} alt={item.title} className="rounded-md w-10 h-10" />
                <div className="flex gap-8 justify-center items-center">
                  <h1 className='w-[80px]'>{item.title}</h1>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <div className="cursor-pointer" onClick={() => dispatch(incrementQuantity(item.id))}><Plus /></div>
                <p>{item.quantity}</p>
                <div className="cursor-pointer" onClick={() => {
                    const cartItem = cart.find((product) => product.id === item.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item.id);
                    } else {
                      dispatch(decrementQuantity(item.id))
                    }
                  }}><Minus /></div>
              </div>
            </div>
          ))}
        </div>
        {
          cart.length > 0 ? (
          <div className="flex justify-around ">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <a
              className="flex cursor-pointer underline"
              onClick={() => {
                dispatch(clearCart())
              }}
            >
              Clear cart
            </a>
          </div>
          ) : (
            <h1 className="text-lg font-bold text-center">Your cart is empty!</h1>
          )
        }
      </div>
    )
  )
}
