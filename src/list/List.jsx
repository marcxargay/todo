import Task from '../task/Task.jsx';
import './List.scss'

const List = ({ items, title, handleOnClickPrevious, handleOnClickNext, handleOnRemove }) => {
  return (
    <div className='list'>
      <h3 className='title'>{title}</h3>
      {items.map((item, i) =>
        <Task 
        text={item.text} 
        description={item.description} 
        status={item.status} 
        key={i} 
        handleOnRemove={() => handleOnRemove(i)}
        handleOnClickPrevious={handleOnClickPrevious ? () => handleOnClickPrevious(i) : null} 
        handleOnClickNext={handleOnClickNext ? () => handleOnClickNext(i) : null} />
      )}
    </div>
  )
}

export default List
