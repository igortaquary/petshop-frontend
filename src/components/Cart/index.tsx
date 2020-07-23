import React, { useContext } from 'react';
import {Container, CartContainer, FocusContainer} from './styles';
import { CartContext } from '../../hooks/cartHook';
import {FiX, FiShoppingCart} from 'react-icons/fi';
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
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          
        </div>
        <Button>Finalizar compra</Button>
      </CartContainer>
    </Container>
  );
}

export default Cart;