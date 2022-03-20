import './Modal.scss'

const Modal = ({ children, open, backdrop, handleOnClose }) => {
  return (
    <>
      <div className={`modal ${open ? 'open' : ''}`}>
        <button onClick={handleOnClose} className='btn-close'>X</button>
        {children}
      </div>
      {
        backdrop && <div
          onClick={handleOnClose}
          className={`backdrop ${open ? 'open' : ''}`}
        ></div>
      }
    </>
  )
}

export default Modal
