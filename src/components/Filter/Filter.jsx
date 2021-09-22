import React, { Component } from 'react';
import { InputContainer } from './Filter.styled';

export class Filter extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({ value });

    this.props.onGetValue(value);
  };

  render() {
    const { value } = this.state;
    return (
      <InputContainer>
        <label>
          Find contacts by name
          <input onChange={this.handleChange} value={value} type="text" />
        </label>
      </InputContainer>
    );
  }
}
