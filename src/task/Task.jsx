import './Task.scss';

const Task = ({text, handleOnClickPrevious, handleOnClickNext, handleOnRemove}) => {
  return (
    <div className='task'>
      <button onClick={handleOnRemove}>X</button>
      <p className='task-text'>{text}</p>
      {handleOnClickPrevious && <button className='btn previous' onClick={handleOnClickPrevious}>Back</button>}
      {handleOnClickNext && <button className='btn next' onClick={handleOnClickNext}>Next</button>}
    </div>
  )
}

export default Task
