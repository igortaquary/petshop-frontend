import React from 'react';
import { Container, Form } from './styles';
import { GoSearch } from 'react-icons/go';
import { Slider } from '@material-ui/core';

const Filter = () => {

    function valuetext(value: number) {
        return `R$${value}`;
    }

    const [value, setValue] = React.useState<number[]>([0, 500]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };



    return (
        <Container>
            <header>Pesquisa</header>
            <Form>
                <input type="text" placeholder="O que busca?" />
                <button type="submit"><GoSearch /></button>
                <p>Categoria:</p>
                <select>
                    <option>Todas</option>
                    <option>Rações</option>
                    <option>Coleiras</option>
                    <option>Comedouros e Bebedouros</option>
                    <option>Roupas</option>
                    <option>Medicamentos</option>
                </select>
                <p>Animal:</p>
                <select>
                    <option>Todos</option>
                    <option>Cachorro</option>
                    <option>Gato</option>
                    <option>Peixe</option>
                    <option>Ave</option>
                </select>
                <p>Ordenar por:</p>
                <select>
                    <option>Popularidade</option>
                    <option>Mais vendidos</option>
                    <option>Menor Preço</option>
                    <option>Maior Preço</option>
                </select>
                <p>Faixa de preço (R$):</p>
                <Slider
                    className='slider'
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={0}
                    max={500}
                />
            </Form>
        </Container>
    )

}

export default Filter;