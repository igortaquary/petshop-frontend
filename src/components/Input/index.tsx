import React, {useState, InputHTMLAttributes, useCallback} from 'react';
import {Container} from './styles';
import {IconType} from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: IconType;
  error?: string | false | undefined;
}

const Input:React.FC<InputProps> = ({children, icon: Icon , error, ...props }) => {

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
      hasError={!!error}
    >
      <span>{error}</span>
      <Icon />
      <input 
        {...props} 
        onFocus={handleOnFocus} 
        onBlur={handleOnBlur}
      />
    </Container>
  )
}

export default Input;