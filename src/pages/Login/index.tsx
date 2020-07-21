import React from 'react';
import {FormContainer, ImageContainer, Container} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';


const Login = () => {

  return (
    
    <Container>
      <FormContainer>
        <strong>Faça seu login</strong>
        <form>
          <Input icon={FiMail} placeholder="E-mail"/>
          <Input icon={FiLock} placeholder="Senha" type="password"/>
          <Button>Entrar</Button>
          <a href="/">Esqueci a senha</a>
        </form>
        <hr />
        <strong>Não possui cadastro?</strong>
        <Button>Cadastre-se</Button>
      </FormContainer>

      <ImageContainer /> 
    </Container>
    
  );
}

export default Login;