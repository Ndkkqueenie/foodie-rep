import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './picker.css';

export default class Picker extends Component {
  render() {
    const { value, onChange } = this.props

    return (
      <div>
          <h1>Reddit</h1>
          <div className="input-group mb-2">
            <input type="text" className="form-control" onChange={onChange} value={value} name="search" placeholder="Search"/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
      </div>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}