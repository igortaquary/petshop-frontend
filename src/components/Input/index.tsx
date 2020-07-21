import React, {useState, InputHTMLAttributes, useCallback} from 'react';
import {Container} from './styles';

const Input:React.FC<InputHTMLAttributes<HTMLInputElement>> = ({children, ...props}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleOnBlur = useCallback((event) => {
    setIsFocus(false);
    setIsFilled(!!event.target.value);
  }, []);


  return (
    <Container 
      isFocus={isFocus} 
      isFilled={isFilled}
    >
      <input 
        {...props} 
        onFocus={handleOnFocus} 
        onBlur={handleOnBlur}
      />
    </Container>
  )
}

export default Input;