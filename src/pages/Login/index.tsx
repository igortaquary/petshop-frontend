import React from 'react';
import * as Yup from 'yup';
import {FormContainer, ImageContainer, Container} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import {Formik} from 'formik';

interface FormErrors {
  [key: string]: string;
}


const Login = () => {

  const loginValidation = Yup.object().shape({
    email: Yup.string().email('Digite um email válido').required('E-mail obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter no mínmo 6 caracteres')
      .required('Senha obrigatória'),
  });


  return (
    
    <Container>
      <FormContainer>
        <strong>Faça seu login</strong>
        <Formik 
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidation}
          onSubmit={(values, { setSubmitting }) => {
            console.log('deu submit');
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <form  onSubmit={handleSubmit}>
              <Input 
                icon={FiMail} 
                onChange={handleChange} 
                value={values.email} 
                name="email" 
                placeholder="E-mail"
                error={errors.email && touched.email && errors.email}
              />
              <Input 
                icon={FiLock} 
                onChange={handleChange} 
                value={values.password} 
                name="password" 
                placeholder="Senha" 
                type="password"
                error={errors.password && touched.password && errors.password}
                />
              <Button type="submit" >Entrar</Button>
              <a href="/">Esqueci a senha</a>
            </form>
          )}
        </Formik>
        <hr />
        <strong>Não possui cadastro?</strong>
        <Button>Cadastre-se</Button>
      </FormContainer>

      <ImageContainer /> 
    </Container>
    
  );
}

export default Login;