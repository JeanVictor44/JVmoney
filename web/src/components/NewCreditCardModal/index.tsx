import Modal from 'react-modal'
import CreditCard, { Focused } from 'react-credit-cards'
import { Container, ContainerLastInputs } from './style'
import { NewCreditCardModalContext } from '../../context/NewCreditCardModal'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import closeImg from '../../assets/close.svg'
import { Api } from '../../services/api'
import { CreditCardsContext } from '../../context/CreditCards'

export const NewCreditCardModal = () => {
  const { handleCloseNewCreditCardModal: onRequestClose, isNewCreditCardModalOpen: isOpen, } = useContext(NewCreditCardModalContext)
  const { setCreditCards } = useContext(CreditCardsContext)
  const [ cvc, setCvc] = useState('')
  const [ number, setNumber ] = useState('')
  const [ expiry, setExpiry ] = useState('')
  const [ name, setName ] = useState('')
  const [ focus, setFocus ] = useState<Focused>('number')
  
  const handleCreateNewCreditCard = async(event: FormEvent) => {
    event.preventDefault()
    const newCreditCard = (await Api.post('/credit-cards', {
      number,
      name,
      cvc,
      expiry
    })).data
    setCreditCards((oldCreditCards) =>  [...oldCreditCards, newCreditCard])


  }

  const handleChangeNumberInput = (event: ChangeEvent<HTMLInputElement>) => {
    const maxLenghtInputNumber = 16
    const newValue = event.target.value
    const isUserDeletingANumber = newValue.length < number.length

    if(number.length < maxLenghtInputNumber || isUserDeletingANumber){
      setNumber(newValue)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Credit Card Modal"
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={handleCreateNewCreditCard}>
        <button 
          type='button' 
          onClick={onRequestClose}
          className='react-modal-close'
        >
          <img src={closeImg} />
      
        </button>

        <h2>Cadastrar Cartão</h2>
        
        <CreditCard 
          cvc={cvc}
          number={number}
          name={name}
          expiry={expiry}
          focused={focus}
        />

        <input 
          type="number" 
          value={number}
          placeholder="Número" 
          onChange={handleChangeNumberInput} 
          onFocus={() => setFocus('number')}
          required
          />

        <input 
          type="text"
          value={name}
          placeholder="Nome" 
          onChange={(event) => setName(event.target.value)} 
          onFocus={() => setFocus('name')}
          required
          />
        <ContainerLastInputs>
          <input 
            type="text" 
            value={expiry}
            placeholder="Data de Expiração" 
            minLength={4}
            maxLength={4}
            onChange={(event) => setExpiry(event.target.value)} 
            onFocus={() => setFocus('expiry')}
            required
          />
          
          <input 
            type="text" 
            value={cvc}
            placeholder="CVC" 
            minLength={3} 
            maxLength={3} 
            onChange={(event) => setCvc(event.target.value) } 
            onFocus={() => setFocus('cvc')}
            required
          />
        </ContainerLastInputs>
        
        <button 
          type='submit'
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}