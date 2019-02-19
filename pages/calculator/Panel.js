import Button from './Button'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonPanelCore = styled.div`
  background-color: #858694;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 8 0 auto;

  > div {
    width: 100%;
    margin-bottom: 1px;
    flex: 1 0 auto;
    display: flex;
  }
`

class Panel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName)
  }

  render () {
    return (
      <ButtonPanelCore>
        <div>
          <Button name='AC' clickHandler={this.handleClick} />
          <Button name='+/-' clickHandler={this.handleClick} />
          <Button name='%' clickHandler={this.handleClick} />
          <Button name='÷' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='7' clickHandler={this.handleClick} />
          <Button name='8' clickHandler={this.handleClick} />
          <Button name='9' clickHandler={this.handleClick} />
          <Button name='x' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='4' clickHandler={this.handleClick} />
          <Button name='5' clickHandler={this.handleClick} />
          <Button name='6' clickHandler={this.handleClick} />
          <Button name='-' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='1' clickHandler={this.handleClick} />
          <Button name='2' clickHandler={this.handleClick} />
          <Button name='3' clickHandler={this.handleClick} />
          <Button name='+' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='0' clickHandler={this.handleClick} wide />
          <Button name='.' clickHandler={this.handleClick} />
          <Button name='=' clickHandler={this.handleClick} orange />
        </div>
      </ButtonPanelCore>
    )
  }
}

export default Panel