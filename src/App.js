
import List from './list/List.js';
import React from 'react'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openItems: [
        {
          text: 'task 1',
          status: 'open'
        },
        {
          text: 'task 2',
          status: 'open'
        },
        {
          text: 'task 3',
          status: 'open'
        },
        {
          text: 'task 4',
          status: 'open'
        },
        {
          text: 'task 5',
          status: 'open'
        },
        {
          text: 'task 6',
          status: 'open'
        },
        {
          text: 'task 7',
          status: 'open'
        }
      ],
      completedItems: []
    }
  }

  handleTaskOnClick(i) {
    const openItems = this.state.openItems.slice()
    openItems[i].status = 'completed'
    const completedItem = openItems.splice(i, 1)
    const completedItems = this.state.completedItems.slice()
    completedItems.push(...completedItem)
    this.setState({
      openItems: openItems,
      completedItems: completedItems
    })
  }

  render() {
    return (
      <div className='app'>
        <List
          items={this.state.openItems}
          title={'Open'}
          handleTaskOnClick={(i) => this.handleTaskOnClick(i)} />
        <List
          items={this.state.completedItems}
          title={'Completed'} />
      </div>
    )
  }
}

export default App;
