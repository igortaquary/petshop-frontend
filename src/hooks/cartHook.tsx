import React, {createContext, useState, useCallback} from 'react';
import Cart from '../components/Cart';

interface ICartContext {
  toggleCart(): void;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider: React.FC = ({children}) => {

  const [isShown, setIsShown] = useState(false);

  const toggleCart = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return(
    <CartContext.Provider value={{toggleCart}}>
      <Cart isShown={isShown}/>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

