
import List from './list/List.jsx';
import Form from './form/Form.jsx';
import React from 'react'
import './App.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValue: '',
      formSubmited: true,
      listMatrix: [[], [], []],
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  moveItemFromListToListAndUpdteStatus(originalList, targetList, i) {
    const removedItem = originalList.splice(i, 1)
    targetList.push(...removedItem)
    return [originalList, targetList]
  }

  handleOnClick(i, listIndex, next) {
    const targetIndex = next ? listIndex + 1 : listIndex - 1
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

  handleFormSubmit(ev) {
    const listsMatrix = this.state.listMatrix.slice()
    listsMatrix[0].push({ text: this.state.formValue })
    this.setState({
      listsMatrix: listsMatrix
    })
    ev.preventDefault()
  }

  handleFormChange(ev) {
    this.setState({
      formValue: ev.target.value
    })
  }

  handleOnTaskRemove(i, matrixIndex) {
    const listsMatrix = this.state.listMatrix.slice()
    listsMatrix[matrixIndex].splice(i, 1)
    this.setState({
      listMatrix: listsMatrix
    })
  }

  render() {
    return (
      <div className='app'>
        <Form
          handleSubmit={this.handleFormSubmit}
          handleChange={this.handleFormChange}
          value={this.state.formValue} />
        <div className='lists-container'>
          <List
            handleOnRemove={(i) => this.handleOnTaskRemove(i, 0)}
            items={this.state.listMatrix[0]}
            title={'TODO'}
            handleOnClickNext={(i) => this.handleOnClick(i, 0, true)} />
          <List
            handleOnRemove={(i) => this.handleOnTaskRemove(i, 1)}
            items={this.state.listMatrix[1]}
            title={'On progress'}
            handleOnClickPrevious={(i) => this.handleOnClick(i, 1, false)}
            handleOnClickNext={(i) => this.handleOnClick(i, 1, true)} />
          <List
            handleOnRemove={(i) => this.handleOnTaskRemove(i, 2)}
            items={this.state.listMatrix[2]}
            handleOnClickPrevious={(i) => this.handleOnClick(i, 2, false)}
            title={'Completed!'} />
        </div>
      </div>
    )
  }
}

export default App;
