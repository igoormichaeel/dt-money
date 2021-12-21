import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  
  margin: 0 auto;
  padding: 2rem 1rem 8.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height:2.8125rem;
    
    border: 0;
    border-radius: 0.3125rem;

    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    background: var(--blue-light);
    padding: 0 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`