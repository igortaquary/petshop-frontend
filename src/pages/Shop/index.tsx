import React from 'react';
import { Container, ProductsContainer } from './styles';
import MostWanted from '../../components/MostWanted';
import Filter from '../../components/Filter';
import Item from '../../components/Item';
import products from '../../data/products.json'

const Shop = () => {



    return (
        <Container>
            <h1>Nossos Produtos</h1>
            <MostWanted />
            <h2>Temos tudo que seu pet precisa!</h2>
            <div className="products">
                <Filter />
                <ProductsContainer>
                    {products.map(product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            src={product.src}
                            price={product.price} />
                    ))}
                    {products.map(product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            src={product.src}
                            price={product.price} />
                    ))}
                </ProductsContainer>
            </div>
        </Container>
    )
}

export default Shop;