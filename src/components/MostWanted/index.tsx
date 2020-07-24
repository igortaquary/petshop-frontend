import React, { useState, useEffect } from 'react';
import {Container, Arrow} from './styles';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import Carousel, {consts} from 'react-elastic-carousel';
import Item from '../Item';
import productList from '../../data/products.json';

interface ArrowProps {
  type: string;
  isEdge: boolean;
  onClick(): void;
}

interface Produtct{
  id: number;
  name: string;
  price: number;
  src: string;
}

const MostWanted = () => {

  const [products, setProducts] = useState([] as Produtct[]);

  useEffect(() => {
    setProducts([...productList]);
  }, []);

  const breakPoints = [
    {width: 1, itemsToShow: 1},

    {width: 380, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 850, itemsToShow: 4},
    {width: 1100, itemsToShow: 5}
  ]

  return (
    <Container>
      <h2>Produtos mais vendidos</h2>
      <Carousel 
        breakPoints = {breakPoints}
        enableAutoPlay 
        autoPlaySpeed={5000}
        renderPagination={() => (<></>)}
        renderArrow={({ type, onClick, isEdge }: ArrowProps) => {
          const pointer = type === consts.PREV ? <FiChevronLeft /> : <FiChevronRight />;
          

          return (
            <Arrow onClick={onClick} disabled={isEdge}>
              {pointer}
            </Arrow>
          );
        }}

      >
        {products.map(product => (
          <Item 
            key={product.id}
            id={product.id} 
            name={product.name} 
            src={product.src} 
            price={product.price}/>
        ))}
      </Carousel>
    </Container>
  );
}

export default MostWanted;