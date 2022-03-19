import './Task.scss';

const Task = ({text, status, handleOnClick}) => {

  return (
    <div className='task'>
      <p className='task-text'>{text}</p>
      {handleOnClick && <button className='task-btn' onClick={handleOnClick}>Complete</button>}
      <p>Satus: {status}</p>
    </div>
  )
}

export default Task
