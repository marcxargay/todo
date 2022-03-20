import './Task.scss';

const Task = ({text, handleOnClickPrevious, handleOnClickNext}) => {
  return (
    <div className='task'>
      <p className='task-text'>{text}</p>
      {handleOnClickPrevious && <button className='btn previous' onClick={handleOnClickPrevious}>Back</button>}
      {handleOnClickNext && <button className='btn next' onClick={handleOnClickNext}>Next</button>}
    </div>
  )
}

export default Task
