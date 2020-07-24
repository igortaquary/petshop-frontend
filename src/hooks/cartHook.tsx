import React, {createContext, useState, useCallback} from 'react';
import Cart from '../components/Cart';

interface ICartContext {
  toggleCart(): void;
  addItem(item: Omit<Produtct, 'quantity'>): void;
  removeItem(id: number): void;
  getCartTotal(): number;
  alterQuantity(id: number, sum: number): void;
  cartProducts: Produtct[];
}

interface Produtct{
  id: number;
  name: string;
  price: number;
  src: string;
  quantity: number;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider: React.FC = ({children}) => {

  const [isShown, setIsShown] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as Produtct[]);

  const toggleCart = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  const addItem = useCallback((data: Omit<Produtct, 'quantity'>) => {
    const existsIndex = cartProducts.findIndex(product => product.id === data.id);
    if(existsIndex !== -1) {
      cartProducts[existsIndex].quantity += 1;
      setCartProducts([...cartProducts]);
    }
    else {
        const item = {
          id: data.id,
          src: data.src,
          name: data.name,
          price: data.price,
          quantity: 1
        }
        setCartProducts([...cartProducts, item]);
    }
  }, [cartProducts]);

  const removeItem = useCallback((id: number) => {
    setCartProducts([...cartProducts.filter(product => product.id !== id)]);
  }, [cartProducts]);

  const getCartTotal = useCallback(() => {
    return cartProducts.reduce((acc, current) => acc + current.price * current.quantity, 0);
  }, [cartProducts]);

  const alterQuantity = useCallback((id: number, sum: number) => {
    const itemIndex = cartProducts.findIndex(product => product.id === id);
    cartProducts[itemIndex].quantity += sum;
    if(cartProducts[itemIndex].quantity === 0){
      cartProducts.splice(itemIndex, 1);
    }
    setCartProducts([...cartProducts]);
  }, [cartProducts]);

  return(
    <CartContext.Provider 
      value={{
        toggleCart, 
        addItem, 
        cartProducts, 
        removeItem, 
        getCartTotal,
        alterQuantity
      }}
    >
      <Cart isShown={isShown}/>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

