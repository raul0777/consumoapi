import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../style/GlobalStyler';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../storybook/modules/exemple/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.buttonRequest());
  }
  return (
    <Container>
      <Title>
        Login<small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit consectetur.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
