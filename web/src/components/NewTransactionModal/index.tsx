import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container, TransctionTypeContainer, RadioBox} from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react'
import { Api } from '../../services/api'
import { Transaction, TransactionsContext } from '../../context/Transactions'

interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose:() => void;
}

Modal.setAppElement('#root')
export const NewTransactionModal = ({isOpen, onRequestClose}:NewTransactionModalProps ) => {
  const { setTransactions } = useContext(TransactionsContext)

  const [ type, setType ] = useState('deposit')
  const [ title, setTitle ] = useState('')
  const [ value, setValue ] = useState(0)
  const [ category, setCategory ] = useState('')

  const handleResetInputs = () => {
    setType('deposit')
    setTitle('')
    setValue(0)
    setCategory('')
  }
  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
    const newTransaction:Transaction = (await Api.post('/transactions', {
      title,
      amount:value,
      category,
      type
    }) ).data
    setTransactions((oldTransactions) => [...oldTransactions, newTransaction])
    handleResetInputs()
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction Modal"
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type='button' 
          onClick={onRequestClose}
          className='react-modal-close'
          >
          <img src={closeImg} />
        </button>

        <h2>Cadastrar Transação</h2>
        <input type='text' placeholder='Título' value={title} onChange={(event) => setTitle(event.target.value)}/> 
        <input type='number' placeholder='Valor' value={value} onChange={(event) => setValue(Number(event.target.value))}/>
        <TransctionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox 
            type="button"
            onClick={() => setType('withdrawn')}
            isActive={type === 'withdrawn'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransctionTypeContainer>

        <input type='text' placeholder='Categoria' value={category} onChange={(event) => setCategory(event.target.value)}/>
        <button type='submit' >Cadastrar</button>
      </Container>
    </Modal>
  )
}