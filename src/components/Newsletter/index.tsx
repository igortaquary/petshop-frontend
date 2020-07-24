import React from 'react';
import { Container } from './styles';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../Button';
import Input from '../Input';
import { FiMail } from 'react-icons/fi';



const Newsletter = () => {

    const validation = Yup.object().shape({
        email: Yup.string().email('E-mail inválido.').required('Digite o e-mail'),
    })

    return (
        <Container>
            <h1>Fique por dentro das novidades!</h1>
            <p>Receba promoções, descontos e eventos no seu e-mail</p>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validation}
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
                        <form onSubmit={handleSubmit}>
                            <Input
                                className={'formText'}
                                icon={FiMail}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                placeholder="E-mail"
                                error={errors.email && touched.email && errors.email}
                            />
                            <Button className={'formButton'} type="submit" >Inscreva-se</Button>
                        </form>
                    )}
            </Formik>
        </Container>
    )
}

export default Newsletter;