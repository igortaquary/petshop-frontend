/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Container } from './styles';
import { FiPlusCircle } from 'react-icons/fi';
import { CartContext } from '../../hooks/cartHook';

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
          console.log(`Adiciona ${name}`);
          cartContext.addItem({id, name, price,src});
        }}/>
      <img src={src} alt={name} />
      <strong>{name}</strong>
      <span>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)}</span>
    </Container>  
  );
}

  

export default Item;
