import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  background: var(--background);

  h2 {
    font-size: 1.5rem;
    color: var(--text-title);

    margin-bottom: 2rem;
  }
  input {
    width: 100%;

    padding: 1.25rem 1.5rem;

    border-radius: 0.3125rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;

    border: 0;
    border-radius: 0.3125rem;

    color: #fff;
    font-weight: 600;

    background: var(--green);

    margin-top: 1.5rem;
    padding: 1.25rem 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TypeTransactionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`
interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem 4.125rem;

  border: 1.5px solid #d7d7d7;
  border-radius: 0.3125rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  img {
    width: 24px;
    height: 24px;
  }
`
