import { useTransactions } from '../../hooks/useTransactions'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Content } from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0
    }
  )

  return (
    <>
      <Content>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Ícone entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)}
          </strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Ícone saídas" />
          </header>
          <strong>
            {'- ' +
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.withdraw)}
          </strong>
        </div>

        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Ícone total" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
          </strong>
        </div>
      </Content>
    </>
  )
}
