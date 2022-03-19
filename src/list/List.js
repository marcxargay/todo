import Task from '../task/Task.js';
import './List.scss'

const List = ({ items, title, handleTaskOnClick }) => {
  return (
    <div className='list'>
      <h3>{title}</h3>
      {items.map((item, i) =>
        <Task text={item.text} status={item.status} key={i} handleOnClick={() => handleTaskOnClick(i)} />
      )}
    </div>
  )
}

export default List
