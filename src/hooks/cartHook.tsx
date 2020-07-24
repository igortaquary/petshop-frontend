import React, {createContext, useState, useCallback} from 'react';
import Cart from '../components/Cart';

interface ICartContext {
  toggleCart(): void;
  addItem(item: Produtct): void;
  removeItem(id: number): void;
  getCartTotal(): number;
  cartProducts: Produtct[];
}

interface Produtct{
  id: number;
  name: string;
  price: number;
  src: string;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider: React.FC = ({children}) => {

  const [isShown, setIsShown] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as Produtct[]);

  const toggleCart = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  const addItem = useCallback((item: Produtct) => {
    setCartProducts([...cartProducts, item]);
  }, [cartProducts]);

  const removeItem = useCallback((id: number) => {
    setCartProducts([...cartProducts.filter(product => product.id !== id)]);
  }, [cartProducts]);

  const getCartTotal = useCallback(() => {
    return cartProducts.reduce((acc, current) => acc + current.price, 0);
  }, [cartProducts]);

  return(
    <CartContext.Provider value={{toggleCart, addItem, cartProducts, removeItem, getCartTotal}}>
      <Cart isShown={isShown}/>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

