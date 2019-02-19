import React from 'react'
import styled from 'styled-components'
import Display from './Display'
import Panel from './Panel'

const CalculatorCore = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`

export default class Calculator extends React.Component {
  handleClick = buttonName => {
    // this.setState(calculate(this.state, buttonName));
    console.log('bingo')
  }

  render () {
    return (
      <CalculatorCore>
        <Display value={this.props.next || this.props.total || '0'} />
        <Panel clickHandler={this.handleClick} />
      </CalculatorCore>
    )
  }
}
