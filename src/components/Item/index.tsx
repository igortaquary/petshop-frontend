/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Container } from './styles';
import { FiPlusCircle } from 'react-icons/fi';
import { CartContext } from '../../hooks/cartHook';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

type ItemProps = {
  src: string;
  name: string;
  price: number;
  id: number;
}

const Item: React.FC<ItemProps> = ({ name, price, src, id }) => {

  const cartContext = useContext(CartContext);

  return (
    <Container key={id}>
      <FiPlusCircle  
        onClick={() => {
          cartContext.addItem({id, name, price,src});
          toast.info(`ℹ️ ${name} foi adicionado(a) ao carrinho.`)
        }}/>
      <Link to={`products/${id}`}>
        <img src={src} alt={name} />  
      </Link>
      <strong>{name}</strong>
      <span>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)}</span>
    </Container>  
  );
}

  

export default Item;
