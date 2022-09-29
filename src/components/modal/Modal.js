import './modal.scss';

const Modal = () => {
return(
  <div className="modal">
    <div className="modal__content">
      <div className="modal__title">Залиште ваші дані і ми звяжемося з вами</div>
      <form>
        <input className='modal__name' type="text" name='name' />
        <input className='modal__email' type="email" name='email' />
        <button>Submit</button>
      </form>
    </div>
  </div>
)
}
export default Modal;