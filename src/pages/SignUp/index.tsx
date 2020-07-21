import React from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Container, ImageContainer, FormContainer} from './styles';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';

const SignUp = () => {
  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <strong>Cadastre-se</strong>
        <form>
          <Input icon={FiUser} placeholder="Nome"/>
          <Input icon={FiMail} placeholder="E-mail"/>
          <Input icon={FiLock} placeholder="Senha" type="password"/>
          <Button>Cadastrar</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignUp;