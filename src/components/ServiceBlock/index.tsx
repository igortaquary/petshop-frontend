import React from 'react';
import {Container, TitleContainer, ServicesContainer, Contact} from './styles';
import {FiPhone} from 'react-icons/fi';
import ServiceCell from '../ServiceCell';
import groomService from '../../assets/service1.png'
import showerService from '../../assets/showerService.png';
import trainingService from '../../assets/trainingService.png';
import vetService from '../../assets/vetService.png';
const ServiceBlock = () => {

  return (
    <Container>
      <TitleContainer>
        <strong>Agende nossos serviços</strong>
        <Contact>
          <FiPhone />
          <span>(00) 99999-9999</span>
        </Contact>

        <Contact>
          <FiPhone />
          <span>(00) 3333-3333</span>
        </Contact>

      </TitleContainer>
      <ServicesContainer>

        <ServiceCell
          image={groomService}
          title="Tosa"
        >       
          É realizada em uma mesa estável e espaçosa, para não ocorrer riscos de queda. Os materiais utilizados são de primeira qualidade e desinfetados após cada tosa.
        </ServiceCell>
        <ServiceCell
          image={showerService}
          title="Banho"
        >       
          O banho padrão é realizado com produtos de primeira qualidade, sempre com água morna e na banheira previamente limpa, levando em conta o estilo de pêlo do animal.
        </ServiceCell>
        <ServiceCell
          image={trainingService}
          title="Adestramento"
        >
          O treinamento é feito na sua casa e é recomendado para todo pet. Nosso adestradores utilizam as técnicas mais modernas para chegar aos resultados desejados.       
        </ServiceCell>
        <ServiceCell
          image={vetService}
          title="Veterinário"
        >
          No consultório Veterinário é possível fazer consultas de rotina, vacinas, aplicações de medicamentos, vermifugação e pequenos procedimentos cirúrgicos.
        </ServiceCell>
      </ServicesContainer>
    </Container>
  );
}

export default ServiceBlock;