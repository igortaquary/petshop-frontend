import React from 'react';
import { TitleContainer, Container, Banner, Dog, About, Info } from './styles';
import ServiceBlock from '../../components/ServiceBlock';
import MostWanted from '../../components/MostWanted';
import Newsletter from '../../components/Newsletter';
import dog from '../../assets/mainCachorro.png';
import bannerDesktop from '../../assets/full3.webp';
import bannerMobile from '../../assets/cachorroLarFeliz.jpg'

const Home = () => {

    return (
        <>
            <TitleContainer>
                <Dog src={dog}></Dog>
                <h1 className="mainTitle">Miggs Petshop</h1>
                <Banner>
                    <a href="http://www.google.com">
                        <picture>
                            <source media='(max-width: 700px)' srcSet={bannerMobile} />
                            <img src={bannerDesktop} alt="Banner" />
                        </picture>
                    </a>
                </Banner>
            </TitleContainer>
            <MostWanted />
            <ServiceBlock></ServiceBlock>
            <Info>
                <Newsletter></Newsletter>
                <About>
                    <h1>Quem somos?</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis venenatis nulla. Donec condimentum tincidunt sapien, at pharetra enim aliquet at. In eu purus pharetra, dictum tortor iaculis, lacinia risus. In commodo volutpat libero eget lacinia. Ut in nisi ut massa pulvinar pellentesque sed fermentum sapien. Donec id nulla leo. Aenean ac consequat ligula.<br />
                    Curabitur eu pharetra dui. Nunc pellentesque blandit hendrerit. Maecenas sodales dictum ultrices. Pellentesque convallis luctus elit ut lacinia. Aliquam vel augue mi. Nunc ut aliquet mauris. Phasellus sit amet tempus elit. Sed hendrerit malesuada tortor quis mollis. Nunc viverra, mi nec lacinia dictum, nulla eros euismod diam, vulputate hendrerit dui risus non nibh.
                </About>
            </Info>
        </>
    )
}

export default Home