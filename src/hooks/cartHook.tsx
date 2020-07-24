import React, {createContext, useState, useCallback} from 'react';
import Cart from '../components/Cart';

interface ICartContext {
  toggleCart(): void;
  addItem(item: Produtct): void;
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

  return(
    <CartContext.Provider value={{toggleCart, addItem, cartProducts}}>
      <Cart isShown={isShown}/>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

