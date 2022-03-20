
import List from './list/List.js';
import React from 'react'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listMatrix: [
        [
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
        ], [], []
      ],
    }
  }

  moveItemFromListToListAndUpdteStatus(originalList, targetList, i) {
    const removedItem = originalList.splice(i, 1)
    targetList.push(...removedItem)
    return [originalList, targetList]
  }

  handleOnClick(i, listIndex, next) {
    const targetIndex = next ? listIndex + 1 : listIndex -1
    const [originList, targetList] = this.moveItemFromListToListAndUpdteStatus(
      this.state.listMatrix[listIndex].slice(),
      this.state.listMatrix[targetIndex].slice(),
      i
    )
    const listMatrix = this.state.listMatrix.slice()
    listMatrix[listIndex] = originList
    listMatrix[targetIndex] = targetList

    this.setState({
      listMatrix: listMatrix
    })
  }


  render() {
    return (
      <div className='app'>
        <List
          items={this.state.listMatrix[0]}
          title={'TODO'}
          handleOnClickNext={(i) => this.handleOnClick(i, 0, true)} />
        <List
          items={this.state.listMatrix[1]}
          title={'On progress'}
          handleOnClickPrevious={(i) => this.handleOnClick(i, 1, false)}
          handleOnClickNext={(i) => this.handleOnClick(i, 1, true)} />
        <List
          items={this.state.listMatrix[2]}
          handleOnClickPrevious={(i) => this.handleOnClick(i, 2, false)}
          title={'Completed!'} />
      </div>
    )
  }
}

export default App;
