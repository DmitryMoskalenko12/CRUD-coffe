import './modal.scss';
const Modal = (props) => {

return(
  <div onClick={() => props.setModal(false)} style={{display: props.modal ? 'block': 'none'}} className={"modal"}>
    <div onClick={(e) => e.stopPropagation()} className="modal__content">
      <div onClick={() => props.setModal(false)} className="modal__close">&times;</div>
      <div className="modal__title">Залиште ваші дані і ми звяжемося з вами</div>
      <form className='modal__form'>
        <input className='modal__name' type="text" name='name' required />
        <input className='modal__email' type="email" name='email' required/>
        <button className='modal__button'>Відправити</button>
      </form>
    </div>
  </div>
)
}
export default Modal;