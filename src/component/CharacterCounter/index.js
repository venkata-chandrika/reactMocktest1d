import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    inputValue: '',
    list: [],
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newInput = {
      id: v4(),
      input: inputValue,
      inputLength: inputValue.length,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newInput],
      inputValue: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, list} = this.state
    return (
      <div className="app-container">
        <div className="counter-container">
          <div className="left-container">
            <h1 className="counter-heading">
              Count the characters like a Boss...
            </h1>
            {list.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="img"
                alt="no user inputs"
              />
            ) : (
              <ul>
                {list.map(eachObj => {
                  const {id, input, inputLength} = eachObj
                  return (
                    <li key={id} className="character">
                      {input}:{inputLength}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div className="right-container">
            <h1 className="heading">Character Counter</h1>

            <form className="input-container" onSubmit={this.onSubmitAdd}>
              <input
                type="text"
                value={inputValue}
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                className="input"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
