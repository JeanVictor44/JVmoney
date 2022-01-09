import Modal from 'react-modal'
import CreditCard, { Focused } from 'react-credit-cards'
import { Container, ContainerLastInputs } from './style'
import { NewCreditCardModalContext } from '../../context/NewCreditCardModal'
import { useContext, useState } from 'react'
import closeImg from '../../assets/close.svg'


export const NewCreditCardModal = () => {
  const { handleCloseNewCreditCardModal: onRequestClose, isNewCreditCardModalOpen: isOpen} = useContext(NewCreditCardModalContext)
  const [ cvc, setCvc] = useState('')
  const [ number, setNumber ] = useState('')
  const [ expiry, setExpiry ] = useState('')
  const [ name, setName ] = useState('')
  const [ focus, setFocus ] = useState<Focused>('number')


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Credit Card Modal"
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
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
          type="tel" 
          maxLength={16} 
          placeholder="Número" 
          onChange={(event) => setNumber(event.target.value)} 
          onFocus={() => setFocus('number')}
          />

        <input 
          type="text" 
          placeholder="Nome" 
          onChange={(event) => setName(event.target.value)} 
          onFocus={() => setFocus('name')}
          />
        <ContainerLastInputs>
          <input 
            type="text" 
            placeholder="Data de Expiração" 
            minLength={4}
            maxLength={4}
            onChange={(event) => setExpiry(event.target.value)} 
            onFocus={() => setFocus('expiry')}
          />
          
          <input 
            type="text" 
            placeholder="CVC" 
            minLength={3} 
            maxLength={3} 
            onChange={(event) => setCvc(event.target.value) } 
            onFocus={() => setFocus('cvc')}
          />
        </ContainerLastInputs>
        
        <button type='submit' >Cadastrar</button>
      </Container>
    </Modal>
  )
}