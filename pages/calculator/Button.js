import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonCore = styled.div`
  display: inline-flex;
  width: ${props => (props.wide ? '50%' : '25%')};
  flex: 1 0 auto;

  button {
    background-color: ${props => (props.orange ? '#f5923e' : '#e0e0e0')};
    color: ${props => (props.orange ? 'white' : null)};
    border: 0;
    font-size: 1.5rem;
    margin: 0 1px 0 0;
    flex: 1 0 auto;
    padding: 0;
  }
`

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
  }

  handleClick = () => {
    this.props.clickHandler(this.props.name)
  }

  render () {
    return (
      <ButtonCore {...this.props}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </ButtonCore>
    )
  }
}

export default Button
