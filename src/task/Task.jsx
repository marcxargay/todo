import './Task.scss';

const Task = ({
  text,
  description,
  handleOnClickPrevious,
  handleOnClickNext,
  handleOnRemove
}) => {
  return (
    <div className='task'>
      <button className='btn remove' onClick={handleOnRemove}>X</button>
      <p className='task-text'>{text}</p>
      <p className='task-text'>{description}</p>
      {handleOnClickPrevious && <button className='btn previous' onClick={handleOnClickPrevious}>Back</button>}
      {handleOnClickNext && <button className='btn next' onClick={handleOnClickNext}>Next</button>}
    </div>
  )
}

export default Task
