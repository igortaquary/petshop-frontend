import React from 'react';
import { Main, Container, Banner, Dog } from './styles';
import dog from '../../assets/mainCachorro.png';
import banner from '../../assets/full3.webp';

const Home = () => {

    return (
        <Main>
            <div className='firstDiv'>
                <Dog src={dog}></Dog>
                <h1 className="mainTitle">Mundo do Cão</h1>
                <Banner>
                    <a href="http://www.google.com">
                        <img src={banner} alt="Banner" />
                    </a>
                </Banner>
            </div>
            <hr />
            <Container>
                Produtos
            </Container>

        </Main>
    )
}

export default Home