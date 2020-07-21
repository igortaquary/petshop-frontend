import React from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Yup from 'yup';
import {Formik} from 'formik'
import {Container, ImageContainer, FormContainer} from './styles';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';

const SignUp = () => {

  const signUpValidation = Yup.object().shape({
    nome: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter no mínimo 6 dígitos')
      .required('Senha obrigatória')
  });

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <strong>Cadastre-se</strong>
        <Formik
          initialValues={{nome: '', email: '', password: ''}}
          onSubmit={() => {
            console.log('deu submit')
          }}
          validationSchema={signUpValidation}          
        >
          {({
            handleSubmit,
            errors,
            handleChange,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <Input 
                icon={FiUser} 
                name="nome" 
                value={values.nome}
                onChange={handleChange}
                placeholder="Nome"
                error={errors.nome && touched.nome && errors.nome}
                />
              <Input 
                icon={FiMail} 
                placeholder="E-mail"
                onChange={handleChange}
                name="email"  
                value={values.email}
                error={errors.email && touched.email && errors.email}
              />
              <Input 
                icon={FiLock} 
                placeholder="Senha" 
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                error={errors.password && touched.password && errors.password}
                />
              <Button type="submit">Cadastrar</Button>
            </form>

          )}

        </Formik>
      </FormContainer>
    </Container>
  );
}

export default SignUp;