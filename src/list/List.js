import Task from '../task/Task.js';
import './List.scss'

const List = ({ items, title, handleOnClickPrevious, handleOnClickNext }) => {
  return (
    <div className='list'>
      <h3>{title}</h3>
      {items.map((item, i) =>
        <Task 
        text={item.text} 
        status={item.status} 
        key={i} 
        handleOnClickPrevious={handleOnClickPrevious ? () => handleOnClickPrevious(i) : null} 
        handleOnClickNext={handleOnClickNext ? () => handleOnClickNext(i) : null} />
      )}
    </div>
  )
}

export default List
