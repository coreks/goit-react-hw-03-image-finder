import React from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { imageName } = this.state;
    if (imageName.trim() === '') {
      return toast.error(`Enter the name of the picture!`);
    }

    this.props.onSubmit(imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const { imageName } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            value={imageName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
