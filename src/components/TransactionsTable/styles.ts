import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th,
    td {
      text-align: left;
      font-weight: 400;
      color: var(--text-body);

      padding: 1.25rem 2rem;
    }

    td {
      background: var(--shape);

      border-radius: 0.3125rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
