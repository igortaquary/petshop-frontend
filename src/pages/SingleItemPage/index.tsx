import React, { useEffect, useState, useContext } from 'react';
import {FiSearch, FiMinus, FiPlus} from 'react-icons/fi';
import {Container, SearchBar, ProductContainer} from './styles';
import products from '../../data/products.json';

import { RouteComponentProps } from "react-router-dom";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { CartContext } from '../../hooks/cartHook';
import { toast } from 'react-toastify';

interface DetailParams {
  id: string;
}

interface Produtct{
  id: number;
  name: string;
  price: number;
  src: string;
}

const SingleItemPage: React.FC<RouteComponentProps<DetailParams>> = ({match}) => {  

  const [product, setProduct] = useState({} as Produtct);
  const [quantity, setQuantity] = useState(1);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    console.log(match.params.id);
    const produto = products.find(item => item.id === parseInt(match.params.id));
    console.log(produto);
    if(produto){
      setProduct(produto);
    }
  }, [match]);

  return (
    <Container>
      <SearchBar>
        <Input icon={FiSearch} placeholder="Pesquise por um produto"/>
        <Button>
          pesquisar
        </Button>
      </SearchBar>

      <ProductContainer>
        <img src={product.src} alt={product.name}/>

        <div>
          <h2>{product.name}</h2>
          <span>R$ <strong>{product.price}</strong> uni.</span>
          <p>
            Aqui é o lugar onde ficaria a descrição do produto, mas por enquanto 
            temos lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Integer auctor pellentesque venenatis. Quisque vulputate mattis 
             fringilla. Vestibulum nibh massa, semper a orci id, tempus egestas ex.
              Maecenas laoreet gravida libero, id suscipit eros luctus ac. Nulla 
              facilisi. Cras ultricies dui quis sem finibus, in mollis ex malesuada.
          </p>
          <div>
            <FiMinus onClick={() => setQuantity(quantity-1)}/>
            <span>{quantity}</span>
            <FiPlus onClick={() => setQuantity(quantity+1)}/>
          </div>
          <Button 
            style={{height: 56}}
            onClick={() => {
              if(quantity){
                cartContext.addItem(product, quantity);
                toast.info(`ℹ️ ${product.name} foi adicionado(a) ao carrinho.`)
              }
            }}>
            Adicionar ao carrinho
          </Button>
        </div>
      </ProductContainer>
    </Container>
  );
}

export default SingleItemPage;