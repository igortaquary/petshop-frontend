import React, { useContext } from 'react';
import {Container, CartContainer, FocusContainer, CartItem} from './styles';
import { CartContext } from '../../hooks/cartHook';
import {FiX, FiShoppingCart, FiTrash} from 'react-icons/fi';
import Button from '../Button';

interface CartProps {
  isShown: boolean;
}

export const Cart: React.FC<CartProps> = ({isShown}) => {
  const cartContext = useContext(CartContext);
  return(
    <Container isShown={isShown}>
      <FocusContainer className="focus" onClick={cartContext.toggleCart} ></FocusContainer>
      <CartContainer isShown={isShown}>
        <div className="cart-header">
          <FiShoppingCart />
          <span>Carrinho</span>
          <FiX onClick={cartContext.toggleCart}/>
        </div>
        <div className="cart-items">
          {
            cartContext.cartProducts.map(product => (
              <CartItem key={product.id}>
                <img src={product.src} alt={product.name}/>
                <div>
                  <span>{product.name}</span>
                  <strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price)}</strong>
                </div>
                <FiTrash onClick={() => cartContext.removeItem(product.id)}/>
              </CartItem>
            ))
          }         
        </div>
        <span>Total: {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cartContext.getCartTotal())}</span>
        <Button>Finalizar compra</Button>
      </CartContainer>
    </Container>
  );
}

export default Cart;